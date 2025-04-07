
const { Login} = require("../controllers/login");
const {Signup } = require("../controllers/signup");
const {Home} =require("../controllers/home");
const {Addmovies} =require("../controllers/addmovies");
const {Viewmovies} =require("../controllers/viewmovies");
const {Deletemovies} =require("../controllers/deletemovies");
const {Updatemovies} =require("../controllers/updatemovies");
const {Getmovies} =require("../controllers/getmovies");
const router=require('express').Router();
router.post("/signup",Signup);
router.post("/login", Login);
router.post("/", Home);
router.post("/addmovies", Addmovies);
router.get("/movies",Viewmovies);
router.delete("/movies/:id",Deletemovies);
router.get("/movies/:id",Getmovies);
router.put("/movies/:id",Updatemovies);



module.exports = router;