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

      res.status(201).json("User registered successfully");
    } catch (error) {
      console.log(error);
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

      const accessToken = payloadToToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
