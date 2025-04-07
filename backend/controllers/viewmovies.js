const moviess = require("../Models/movies");
module.exports.Viewmovies = async (req, res) => {
      try {
        const movies = await moviess.find();
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching Movies' });
      }
  };