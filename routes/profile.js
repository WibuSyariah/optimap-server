const express = require("express");
const router = express.Router();
const authorization = require("../middlewares/authorization");
const upload = require("../middlewares/multer.js");
const ProfileController = require("../controllers/profile");

router.get("/", authorization, ProfileController.getOne);
router.post(
  "/",
  authorization,
  upload.single("photo"),
  ProfileController.create
);
router.get("/list", ProfileController.getAll);
router.put(
  "/:UserId",
  authorization,
  upload.single("photo"),
  ProfileController.update
);
router.delete("/:UserId", ProfileController.delete);

module.exports = router;
