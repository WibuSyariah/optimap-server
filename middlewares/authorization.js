const { tokenToPayload } = require("../helpers/jwt");
const { User } = require("../models");

const authorization = async (req, res, next) => {
  try {
    const { accessToken } = req.headers;
    const payload = tokenToPayload(accessToken);
    const userFound = await User.findByPk(payload.id);

    if (!userFound) {
      throw { statusCode: 401 };
    } else {
      req.user = {
        id: userFound.id,
        email: userFound.email,
      };
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorization;
