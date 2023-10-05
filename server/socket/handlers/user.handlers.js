const User = require("../../models/User")

const users = {}
let onlineUsers = []

module.exports = function userHandlers(io, socket) {
    const { roomId, userName } = socket

    if (!users[roomId]) {
        users[roomId] = []
    }

    const updateUserList = () => {
        io.to(roomId).emit("user_list:update", users[roomId])
    }

    socket.on("user:connect", async (id, user) => {
        // console.log(user, id, "connect")
        if (roomId === "1" && user.userId) {
            user.socketId = socket.id
            onlineUsers.push(user)
            // console.log(user, "isOnline")
            await User.findByIdAndUpdate(user.userId, { isOnline: true })
        }
    })

    socket.on("user:add", (user) => {
        socket.to(roomId).emit("log", `User ${userName} connected`)
        user.socketId = socket.id
        users[roomId].push(user)

        updateUserList()
    })

    const toOfflineUsers = async (users) => {
        // console.log(users, "isOffline")
        await Promise.all(
            users.map((user) =>
                User.findByIdAndUpdate(user.userId, { isOnline: false, lastSeenOnline: Date.now() })
            )
        )
    }

    socket.on("user:disconnect", async (id, user) => {
        // console.log(user, id, "disconnected")
        if (roomId === "1" && user.userId) {
            onlineUsers = onlineUsers.filter((u) => u.userId !== user.userId)
            toOfflineUsers([user])
        }
    })

    socket.on("disconnect", () => {
        if (!users[roomId]) return
        console.log("disconnect")
        socket.to(roomId).emit("log", `User ${userName} disconnected`)

        users[roomId] = users[roomId].filter((u) => u.socketId !== socket.id)

        updateUserList()
        if (roomId === "1") {
            const offlineUsers = onlineUsers.filter((u) => u.socketId === socket.id)
            onlineUsers = onlineUsers.filter((u) => u.socketId !== socket.id)
            toOfflineUsers(offlineUsers)
        }
    })
}
