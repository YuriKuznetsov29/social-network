const User = require("../models/User");

class UserService {
    async getAllUsers() {
        const users = await User.find();
        return users;
    }

    createPost() {}

    removePost() {}

    getPost() {}

    getAllPosts() {}
}

module.exports = new UserService();
