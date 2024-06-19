const addServices = require("../services/adServices");
const Ad = require("../models/addModel");
const Category = require("../models/categModel");
const User = require("../models/userModel");
const Like = require('../models/likeModel');
const { populate } = require("../models/addModel");

const mongoose = require('mongoose')

// sukurti skelbima
exports.addCreation = async (req, res) => {
    const { image, price, description, categoryId } = req.body;
    const userId = req.user.id;
    
    try {
        const ad = await addServices.createAd(
          image,
          price,
          description,
          categoryId,
          userId,
        );
        res.status(201).json({ message: "Advertisement created ", ad });
      } catch (error) {
        res.status(400).json({ error: "Creation failed: " + error.message });
      }


};





  exports.getAllAds = async (req, res) => {
	const result = await Ad.find({ user_id: req.user._id })
        .populate("like_ids")
        .populate("category_id", "name");

	if (result == null) {
		return res.sendStatus(404)
	}

	return res.status(200).json({ data: result })
}


exports.getAdById = async (req, res) => {
    try {
      const ad = await addServices.getAdById(req.params.id);
      res.status(200).json({ message: "Ad retrieved successfully", ad });
    } catch (error) {
      res.status(400).json({ error: "Ad retrieval failed: " + error.message });
    }
  };

//   gauti pasgal userio id

  exports.getAdsByUserId = async (req, res) => {
    const userId = req.user.id;
  
    try {
      const ads = await addServices.getAdsByUserId(userId);
      res.status(200).json({ message: "Ads retrieved successfully", ads });
    } catch (error) {
      res.status(400).json({ error: "Ads retrieval failed: " + error.message });
    }
  };

  
  exports.updateAd = async (req, res) => {
    const updates = req.body;
    const adId = req.params.id;
  
    try {
      const ad = await addServices.updateAd(adId, updates);
      res.status(200).json({ message: "Ad updated successfully", ad });
    } catch (error) {
      res.status(400).json({ error: "Ad update failed: " + error.message });
    }
  };


  exports.deleteAd = async (req, res) => {
    const adId = req.params.id;
    const userId = req.user.id;
  
    try {
      const result = await adService.deleteAd(adId, userId);
      res.status(200).json({ message: "Ad deleted successfully", result });
    } catch (error) {
      res.status(400).json({ error: "Ad deletion failed: " + error.message });
    }
  };