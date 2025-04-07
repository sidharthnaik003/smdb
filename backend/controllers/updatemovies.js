const movies = require("../Models/movies");



module.exports.Updatemovies = async (req, res) => {
    try {
        const moviesId = req.params.id;
        const updatedmovies = req.body;
        const result = await moviess.findByIdAndUpdate(moviesId, updatedmovies, {
          new: true,
        });
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: "Error updating Movie", error: error.message });
      }
    };
    