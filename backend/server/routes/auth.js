const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";



router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

//login failed
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

//logout
router.get("/logout", (req, res) => {
  req.logout();
  req.destroy();
  res.redirect(CLIENT_URL);
});


//google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


//github
router.get("/github", passport.authenticate("github", { scope: ["profile"], session: false }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

//facebook
router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

//twitter
router.get("/twitter",passport.authenticate("twitter", {scope: ["profile"]}));

router.get(
  "twitter/callback",
  passport.authenticate("twitter",{
    successRedirect: "https://twitter.com/home",
    failureRedirect: "/login/failed",
  })
);





module.exports = router