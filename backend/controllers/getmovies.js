const moviess = require("../Models/movies");
module.exports.Getmovies = async (req, res) => {
    try {
        const movies = await movies.findById(req.params.id);
        if (!movies) {
          return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({ message: "Error fetching Movie by ID" });
      }
    };
    