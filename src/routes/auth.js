const express = require("express");
const router = express.Router();
const { signup, signin, requireSignin} = require("../controller/auth");

router.post("/signin", signin);

router.post("/signup", signup);

// router.post("/profile", requireSignin, (req, res) => {
//   return res.status(200).json({user: req.user});
// });


module.exports = router;