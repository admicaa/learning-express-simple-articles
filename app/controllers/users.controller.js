import usersModel from "../models/users.model.js";
import bcrypt from "bcrypt";
class UsersController {
  async index(req, res) {
    var users = await usersModel.find();
    res.json({ users });
  }

  async store(req, res) {
    bcrypt.hash(req.body.password, 5, async function (err, hash) {
      var username = req.body.username;
      var user = new usersModel({
        username,
        password: hash,
      });
      try {
        user = await user.save();
      } catch (error) {
        if (error.code === 11000) {
          return res.status(422).json({
            username: `Value ${username} already exists`,
          });
        }
        return res.status(500).json({
          error,
        });
      }
      res.json(user);
    });
  }
}

export default new UsersController();
