import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";


import "./view.css"

function Myblogs() {
  const [fdata, setFData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredmoviess, setFilteredmoviess] = useState(fdata);

  useEffect(() => {
    const filtered = fdata.filter(
      (movies) =>
        movies.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movies.actor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movies.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredmoviess(filtered);
  }, [fdata, searchQuery]);



  useEffect(() => {
    Axios.get("http://localhost:4000/movies").then((res) => {
      setFData(res.data);
    });
  }, []);



  const handleDelete = (moviesId) => {
    // Send a DELETE request to the server
    Axios.delete(`http://localhost:4000/movies/${moviesId}`)
      .then((res) => {
        // Update the list of moviess after successful deletion

        setFData(fdata.filter((movies) => movies._id !== moviesId));
      })
      .catch((error) => {
        alert(error);

        console.error("Error deleting movies:", error);
      });
  };

  return (
    <>
      <div className="myblogs-container">

        <div className="animated-search-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by title, or genre"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control animated-search-input"
            />
            <div className="input-group-prepend">
              <span className="input-group-text animated-search-icon">
                <FaSearch />
              </span>
            </div>
          </div>
        </div>
        <h3 className="text-center mt-4 mb-3" style={{ color: "darkblue", fontWeight: "bold", fontSize: "34px" }}>
          Available Movies
        </h3>
        <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
          {filteredmoviess.map((movies) => (
            <div className="col-md-2 col-lg-2 col-sm-6 mb-4" key={movies._id}>
              <div className="card shadow-sm">
                <img
                  src={movies.image}
                  className="card-img-top"
                  alt="movies Cover"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movies.title}</h5>
                  <p className="card-text">
                    <strong>New Release
                      </strong> {movies.actor}
                  </p>
                  <p className="card-text">
                    <strong>Genre:</strong> {movies.genre}
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> {movies.year}
                  </p>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    {/* <a href={`/update/${movies._id}`} className="btn btn-primary me-2">
                      Update
                    </a> */}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(movies._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer class="bg-light pb-5">
          <div class="container text-center">
            <div>
              <div>Contact US</div>
              <div>Phone:+91 5432106789</div>
              <div>E-Mail:smdb@gmail.com</div>
            </div>
            <p class="font-italic text-muted mb-0">
              &copy;  Copyright © 2023 SMDB Media & Entertainment. All rights reserved.
            </p>
          </div>
        </footer>


      </div>
    </>
  );
}

export default Myblogs;
