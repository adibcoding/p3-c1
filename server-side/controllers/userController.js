const { comparing, hashing } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User, sequelize } = require("../models");

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "loginError" };
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw { name: "loginError" };
      }

      const token = generateToken({
        id: user.id,
        email: user.email,
      });

      if (!comparing(password, user.password)) throw { name: "loginError" };

      res.status(200).json({
        access_token: token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const {
        email,
        password,
        username,
        phoneNumber,
        address
      } = req.body;

    //   if (!email || !password) throw { name: "loginError" };

      const user = await User.create({
        email,
        password,
        username,
        phoneNumber,
        address,
        role: 'Admin',
      });

      res.status(201).json({
        message: "User has been registered successfully",
        user,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
