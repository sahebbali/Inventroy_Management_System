const express =require('express');
const UsersController =require('../controllers/Users/UsersController')
const BrandsController=require("../controllers/Brands/BrandsController");

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





module.exports=router;






































module.exports=router;