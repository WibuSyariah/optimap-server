const express = require("express");
const router = express.Router();
const user = require("./user");
const profile = require("./profile");

router.use("/users", user);
router.use("/profiles", profile);

module.exports = router;
