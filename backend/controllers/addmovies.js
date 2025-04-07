const User = require("../Models/movies");


module.exports.Addmovies = async (req, res, next) => {
    try {
      const {title,author,genre,year,image } = req.body;
      const existingUser = await User.findOne({ title });
      if (existingUser) {
        return res.json({ message: "Movie already exists" });
      }
      
      const movies = await User.create({ title,author,genre,year,image });
      
      
      res
        .status(201)
        .json({ message: "Movie added succesfully", success: true,movies});
      next();
    } catch (error) {
      console.error(error);
    }
  };