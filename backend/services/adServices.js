const Ad = require("../models/addModel");
const Category = require("../models/categModel");
const User = require("../models/userModel");
const Like = require('../models/likeModel');

const { populate } = require("../models/addModel");

class AddService {
    async createAd(image, price, description, categoryId, userId) {

      if (!image || !description || !categoryId || !userId || !price ) {
        throw new Error("Please provide all information required: image, price, description, categoryId");
      }
      const category = await Category.findById(categoryId);
      if (!category) {
        throw new Error("The provided category does not exist in the database");
      }
  
      const ad = await Ad.create({
        image: image,
        price: price,
        description: description,
        category_id: categoryId,
        user_id: userId,
      });
      console.log(ad)
  
      await User.findByIdAndUpdate(userId, {
        $push: { ad_ids: ad._id },
      });
      return ad;
    }
  
  


    async getAdById(adId) {
      const addOne = await Ad.findById(adId).populate("category_id", "name");
  
      if (!addOne) {
        throw new Error("Ad not found");
      }
      return addOne;
    }


  
    async getAdsByUserId(userId) {
      const ads = await Ad.find({ user_id: userId }).populate(
        "category_id",
        "name",
      );
      return ads;
    }
  
    async updateAdded(adId, updates) {
      const ad = await Ad.findById(adId);
      if (!ad) {
        throw new Error("Ad not found");
      }
  
      if (updates.image) {
        ad.image = updates.image;
      }
  
      if (updates.price) {
        ad.price = updates.price;
      }
  
      if (updates.description) {
        ad.description = updates.description;
      }
  
      if (updates.category_id) {
        ad.category_id = updates.category_id;
      }
  
      const result = await ad.save();
      return result;
    }
  
    async deleteAdded(adId, userId) {
      const result = await Ad.deleteOne({ _id: adId });
      if (result.deletedCount === 0) {
        throw new Error("Ad not found");
      }
  
      await User.findByIdAndUpdate(userId, {
        $pull: { ad_ids: adId },
      });
  
      return result;
    }
  }
  
  module.exports = new AddService();
  