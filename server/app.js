const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const fileUpload = require("express-fileupload")
const chalk = require("chalk")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const initDatabase = require("./startUp/initDatabase")
const routes = require("./routes")
const path = require("path")
const { createServer } = require("node:http")
const { Server } = require("socket.io")
const onConnection = require("./socket/onConnection")

const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors: config.get("clientURL") ?? "http://localhost:3000",
    serveClient: false,
})

app.use(fileUpload())
app.use(express.json())
app.use(express.static("static"))
app.use(
    express.urlencoded({
        extended: false,
    })
)
app.use(cookieParser())
app.use(
    cors({
        credentials: true,
        origin: config.get("clientURL") ?? "http://localhost:3000",
    })
)
app.use("/api", routes)

const PORT = config.get("port") ?? 8080

if ((process.env.NODE_ENV = "production")) {
    app.use("/", express.static(path.join(__dirname, "client")))

    const indexPath = path.join(__dirname, "index.html")

    app.get("/*", (req, res) => {
        res.sendFile(indexPath)
    })
}

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase()
        })
        await mongoose.connect(config.get("mongoUri"))
        console.log(chalk.green(`MongoDB has been connected`))

        io.on("connection", (socket) => {
            console.log(chalk.green("a user connected"), socket.id)
            onConnection(io, socket)
        })

        server.listen(PORT, () => {
            console.log(chalk.green(`Server has started on port ${PORT}`))
        })
    } catch (e) {
        console.log(chalk.red(e.message))
        process.exit(1)
    }
}

start()
