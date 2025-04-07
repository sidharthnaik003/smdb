import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./UpdateForm.css"

function Updatemovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setmovie] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    image: "",
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/movie/${id}`).then((res) => {
      setmovie(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setmovie((prevmovie) => ({
      ...prevmovie,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setmovie({
          ...movie,
          image: reader.result, // Store the base64 encoded image
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:4000/movie/${id}`, movie)
      .then((res) => {
        console.log("movie updated:", res.data);
        alert("Updated")
        setTimeout(() => {
          navigate("/view");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error updating movie:", error);
        alert(error)
      });
  };
  return (
    <>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form onSubmit={handleUpdate} >
            <br></br>
            <center><h1 class="heading">Update</h1></center>

            <img src={movie.image} className="card-img-top" alt="Card" height="200" width="300" />

            <br></br>
            <hr></hr>
            <div class="formbold-input-flex">
              <label class="formbold-form-label">
                Image:
              </label>
              <input
                type="file"
                class="formbold-form-input"
                id="image"
                placeholder='.jpeg file'
                onChange={handleImageChange}
                accept="image/*"
              ></input>
            </div>
            <div class="formbold-input-flex">
              <div>
                <input
                  type="text"
                  name="title"
                  value={movie.title}
                  onChange={handleInputChange}
                  class="formbold-form-input"
                />
                <label class="formbold-form-label">Title</label>
              </div>
              <div>
                <input
                  class="formbold-form-input"
                  type="text"
                  name="author"
                  value={movie.author}
                  onChange={handleInputChange}
                />
                <label class="formbold-form-label">Author</label>
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <input
                  class="formbold-form-input"
                  type="text"
                  name="genre"
                  value={movie.genre}
                  onChange={handleInputChange}
                />
                <label class="formbold-form-label"> Genre </label>
              </div>
              <div>
                <input
                  class="formbold-form-input"
                  type="text"
                  name="year"
                  value={movie.year}
                  onChange={handleInputChange}
                />
                <label class="formbold-form-label"> Publication Date </label>
              </div>
            </div>
            <div class="formbold-bottom">
              <button class="formbold-btn-cancel" type="button" ><a class="formbold-anchor " href="/view">Cancel</a></button>
              <button
                class="formbold-btn-submit"
                type="submit" >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Updatemovie;
