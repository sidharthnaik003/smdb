import "./service.css"
import axios from "axios";
import React, { useState } from 'react';
import "./addmovies.css"

const Service = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    image: "",
  });
  const { title, author, genre, year, image } = inputValue;

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/addmovies",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        alert("Movie Added Successfully !!!")
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      title: "",
      author: "",
      genre: "",
      year: "",
      image: "",
    });
  };

  return (
    <>
      <body>
        <br></br>
        <div class="container p-4">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-2">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="card-body">
                <h5 class="card-title">Add Movie</h5><br />
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add</button>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-2">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="card-body">
                <h5 class="card-title">View Movie</h5><br />
                <a href="/view" class="btn btn-primary">View</a>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-2">
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add a movie to the Library</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div>
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="title" class="form-label">
                        Movie Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter movie name"
                        value={title}
                        onChange={handleOnChange}
                        required
                      ></input>
                    </div>

                    <div class="mb-3">
                      <label for="author" class="form-label">
                        Actor Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="author"
                        placeholder="Enter Actor name"
                        value={author}
                        onChange={handleOnChange}
                        required
                      ></input>
                    </div>

                    <div class="mb-3">
                      <label for="genre" class="form-label">
                        Genre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="genre"
                        placeholder="Enter movie genre"
                        value={genre}
                        onChange={handleOnChange}
                        required
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="year" class="form-label">
                        Year of Movie
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="year"
                        placeholder="Enter the year"
                        value={year}
                        onChange={handleOnChange}
                        required
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="image" class="form-label">
                        Paste Image Link
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="Paste image link"
                        value={image}
                        onChange={handleOnChange}
                        required
                      ></input>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-success">Add Movie</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div>
          <footer class="bg-light pb-5">
            <div class="container text-center">
              <div>
                <div>Contact US</div>
                <div>Phone:+91 5432106789</div>
                <div>E-Mail: smdb@gmail.com</div>
              </div>
              <p class="font-italic text-muted mb-0">
                &copy; Copyright  2023 SMDB Media & Entertainment. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
}

export default Service;


