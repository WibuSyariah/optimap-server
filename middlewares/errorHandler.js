const errorHandler = (error, req, res, next) => {
  if (error.statusCode === 403) {
    res.status(403).json({
      message: "Forbidden access",
    });
  } else if (error.name === "SequelizeValidationError") {
    let newError = error.errors.map((err) => err.message);
    res.status(400).json({
      message: newError[0],
    });
  } else if (error.statusCode === 404) {
    res.status(404).json({
      message: "Not Found",
    });
  } else if (error.statusCode === 401) {
    res.status(401).json({
      message: "Invalid Email or Password!",
    });
  } else if (error.name === "JsonWebTokenError") {
    res.status(401).json({
      message: "Invalid identification token",
    });
  } else if (error.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({
      message: "Email already used",
    });
  } else if (error.name === "TypeError") {
    res.status(400).json({
      message: "Please upload a photo",
    });
  } else {
    // console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = errorHandler;
