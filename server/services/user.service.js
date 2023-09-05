const User = require("../models/User")

class UserService {
    async getAllUsers() {
        const users = await User.find()
        return users
    }

    async getUser(id) {
        const user = await User.findOne({ _id: id })
        return user
    }

    createPost() {}

    removePost() {}

    getPost() {}

    getAllPosts() {}
}

module.exports = new UserService()
