const express = require("express");
const { getAllproducts,createProduct,updateProduct, deleteProduct, getProductDetails} = require("../controller/productcontroller");

const router= express.Router();

router.route("/products").get(getAllproducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);


module.exports=router
