const categoryService = require("../services/categoryService");


exports.createCategory = async (req, res) => {
    const { name } = req.body;
  
    try {
      const category = await categoryService.createCategory(name);
      res
        .status(200)
        .json({ message: "Category creation was successfull", category });
    } catch (error) {
      res
        .status(400)
        .json({ error: "Category creation failed: " + error.message });
    }
  };
  


  exports.getAllCategories = async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      res
        .status(200)
        .json({ message: "Categories retrieved successfully", categories });
    } catch (error) {
      res
        .status(400)
        .json({ error: "Categories retrieval failed: " + error.message });
    }
  };

  exports.getCategoryById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const category = await categoryService.getCategoryById(id);
      res
        .status(200)
        .json({ message: "Category retrieved successfully", category });
    } catch (error) {
      res
        .status(400)
        .json({ message: "No such category or failed: " + error.message });
    }
  };

  exports.deleteCategoryById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await categoryService.deleteCategoryById(id);
      res.status(200).json({ message: "Category deleted " });
    } catch (error) {
      res
        .status(400)
        .json({ error: "Failed to delete category: " + error.message });
    }
  };