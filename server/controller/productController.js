const Product = require("../model/Product");
const cloudinary = require("cloudinary").v2;

const productAdd = async (req, res) => {
  try {
    const {
      categoryId,
      productName,
      productDiscription,
      productOfferPrice,
      productPrice,
      productStatus,
    } = req.body;
    const productGet = await Product.findOne({ productName: productName });

    if (!productGet) {
      const img = await cloudinary.uploader.upload(req.file.path, {
        folder: "final",
      });

      const data = await Product.create({
        categoryId,
        productName,
        productDiscription,
        productOfferPrice,
        productPrice,
        productStatus,
        productImage: img.secure_url,
        ImagesPubligId: img.public_id,
      });
      if (data) {
        return res.status(201).send({
          success: true,
          message: "Product Added Successfully",
          product: data,
        });
      }
    } else {
      return res.status(500).send({
        success: false,
        message: "Product Already Exists",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const productView = async (req, res) => {
  try {
    const allProduct = await Product.find({}).populate('categoryId')
    if (!allProduct) {
      return res.status(404).send({
        success: false,
        message: "product not found",
      });
    }
    return res.status(201).send({
      success: true,
      message: "Category finded successfully",
      allProduct,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  productAdd,
  productView
};
