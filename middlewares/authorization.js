const { tokenToPayload } = require("../helpers/jwt");
const { User } = require("../models");

const authorization = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = tokenToPayload(access_token);
    const userFound = await User.findByPk(payload.id);

    if (!userFound) {
      throw { statusCode: 403 };
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
