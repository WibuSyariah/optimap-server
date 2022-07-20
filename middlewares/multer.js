const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + req.user.id + "-" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

module.exports = upload;
