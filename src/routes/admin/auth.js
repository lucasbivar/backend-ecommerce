const express = require("express");
const router = express.Router();
const { signup, signin } = require("../../controller/admin/auth");
const {validateSignupRequest, validateSigninRequest, isRequestValidated} = require("../../validators/auth");

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

// router.post("/profile", requireSignin, (req, res) => {
//   return res.status(200).json({user: req.user});
// });


module.exports = router;