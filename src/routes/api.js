const express =require('express');
const UsersController =require('../controllers/Users/UsersController')
const BrandsController=require("../controllers/Brands/BrandsController");
const CategoriesController = require("../controllers/Categories/CategoriesController");
const CustomersController = require("../controllers/Customers/CustomersController");
const PurchasesController = require("../controllers/Purchases/PurchasesController");
const ReturnsController = require("../controllers/Returns/ReturnsController");

const AuthVerifyMiddleware =require('../middlewares/AuthVerifyMiddleware')
const router =express.Router();


// User Profile
router.post("/Registration",UsersController.Registration);
router.post("/Login",UsersController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);


// Brands
router.post("/CreateBrand",AuthVerifyMiddleware,BrandsController.CreateBrand);
router.post("/UpdateBrand/:id",AuthVerifyMiddleware,BrandsController.UpdateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandsController.BrandList);
router.get("/BrandDropDown",AuthVerifyMiddleware,BrandsController.BrandDropDown);
router.get("/DeleteBrand/:id",AuthVerifyMiddleware,BrandsController.DeleteBrand);
router.get("/BrandDetailsByID/:id",AuthVerifyMiddleware,BrandsController.BrandDetailsByID);



// Categories
router.post("/CreateCategories",AuthVerifyMiddleware,CategoriesController.CreateCategories);
router.post("/UpdateCategories/:id",AuthVerifyMiddleware,CategoriesController.UpdateCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesController.CategoriesList);
router.get("/CategoriesDropDown",AuthVerifyMiddleware,CategoriesController.CategoriesDropDown);
router.get("/DeleteCategories/:id",AuthVerifyMiddleware,CategoriesController.DeleteCategories);
router.get("/CategoriesDetailsByID/:id",AuthVerifyMiddleware,CategoriesController.CategoriesDetailsByID);


// Customers
router.post("/CreateCustomers",AuthVerifyMiddleware,CustomersController.CreateCustomers);
router.post("/UpdateCustomers/:id",AuthVerifyMiddleware,CustomersController.UpdateCustomers);
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersController.CustomersList);
router.get("/CustomersDropDown",AuthVerifyMiddleware,CustomersController.CustomersDropDown);
router.get("/DeleteCustomer/:id",AuthVerifyMiddleware,CustomersController.DeleteCustomer);
router.get("/CustomersDetailsByID/:id",AuthVerifyMiddleware,CustomersController.CustomersDetailsByID);



//Purchases
router.post("/CreatePurchases",AuthVerifyMiddleware,PurchasesController.CreatePurchases);
router.get("/PurchasesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,PurchasesController.PurchasesList);
router.get("/PurchasesDelete/:id",AuthVerifyMiddleware,PurchasesController.PurchasesDelete);


//Return
router.post("/CreateReturns",AuthVerifyMiddleware,ReturnsController.CreateReturns);
router.get("/ReturnsList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ReturnsController.ReturnsList);
router.get("/ReturnDelete/:id",AuthVerifyMiddleware,ReturnsController.ReturnDelete);


module.exports=router;






































module.exports=router;