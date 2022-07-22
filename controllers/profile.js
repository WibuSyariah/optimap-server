const { User, Profile } = require("../models");
const fs = require("fs");
const BASE_URL = "http://localhost:3000/";

class ProfileController {
  static async getOne(req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findByPk(id, {
        include: [
          {
            model: Profile,
          },
        ],
      });

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { id } = req.user;
      const { nik, fullName, gender, bloodType } = req.body;

      const photoPath = req.file.path;
      const photoUrl = BASE_URL + photoPath;

      await Profile.create({
        nik,
        fullName,
        gender,
        bloodType,
        photo: photoUrl,
        UserId: id,
      });

      res.status(201).json({
        message: "Profile Created",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const { page } = req.query;

      let condition = {
        limit: 15,
        offset: (page - 1) * 15,
        include: [
          {
            model: Profile,
          },
        ],
      };

      const userProfiles = await User.findAndCountAll(condition);

      res.status(200).json(userProfiles);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { UserId } = req.params;
      const { nik, fullName, gender, bloodType } = req.body;

      const profile = await Profile.findOne({
        where: {
          UserId,
        },
      });

      if (!profile) {
        throw { statusCode: 404 };
      }

      const oldPhotoPath = profile.photo.split(BASE_URL)[1];
      fs.unlinkSync(oldPhotoPath);
      const photoPath = req.file.path;
      const photoUrl = BASE_URL + photoPath;

      await profile.update({
        nik,
        fullName,
        gender,
        bloodType,
        photo: photoUrl,
      });

      res.status(200).json({
        message: "Profile Updated",
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { UserId } = req.params;

      const profile = await Profile.findOne({
        where: {
          UserId,
        },
      });

      if (!profile) {
        throw { statusCode: 404 };
      }

      const photoPath = profile.photo.split(BASE_URL)[1];

      fs.unlinkSync(photoPath);
      await profile.destroy();

      res.status(200).json({
        message: "Profile Deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProfileController;
