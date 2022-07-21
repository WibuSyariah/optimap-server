const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { payloadToToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      await User.create({
        email,
        password,
      });

      res.status(201).json({
        message: "User Registered",
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw { statusCode: 401 };
      }

      const isValidPassword = comparePassword(password, user.password);

      if (!isValidPassword) {
        throw { statusCode: 401 };
      }

      const access_token = payloadToToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        access_token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
