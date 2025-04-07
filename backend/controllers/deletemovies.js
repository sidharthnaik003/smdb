const movies = require("../Models/movies");


module.exports.Deletemovies = async (req, res, next) => {
    try {
        const deletedmovies = await movies.findByIdAndDelete(req.params.id);
        if (!deletedmovies) {
          return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.status(200).json({ success: true, message: "Movie deleted successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
    
  };