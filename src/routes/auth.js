const express = require("express");
const {validateSignupRequest, validateSigninRequest, isRequestValidated} = require("../validators/auth");
const router = express.Router();
const { signup, signin} = require("../controller/auth");


router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/signin", validateSigninRequest, isRequestValidated, signin);
// router.post("/profile", requireSignin, (req, res) => {
//   return res.status(200).json({user: req.user});
// });


module.exports = router;