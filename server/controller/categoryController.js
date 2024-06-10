const Category = require("../model/Category");

const categoryAdd = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const category = await Category.create({
      categoryName: categoryName,
      createdBy: req.user.payload._id,
    });
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error" + err,
    });
  }
};

const categoryView = async (req, res) => {
  try {
    
    const allCategory = await Category.find({})
    return res.status(201).json({
      success: true,
      message: "Category finded successfully",
      allCategory,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error" + err,
    });
  }
};

const categoryEdit = async (req, res) => {
  try {
    const id = req.query.id
    const editCategory = await Category.findByIdAndUpdate(id,{
      categoryName : req.body.categoryName
    })
    return res.status(201).json({
      success: true,
      message: "Category updated successfully",
      editCategory
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error" + err,
    });
  }
};

const categoryDelete = async (req, res) => {
  try {
    const id = req.query.id
    const deleteCategory = await Category.findByIdAndDelete(id)
    return res.status(201).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error" + err,
    });
  }
};

module.exports = {
  categoryAdd,
  categoryView,
  categoryDelete,
  categoryEdit,
};
