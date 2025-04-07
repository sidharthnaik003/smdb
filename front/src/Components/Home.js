import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import logo from "../images/logo.png";
import Axios from "axios";
import './home.css';

const Home = () => {
  const [fdata, setFData] = useState([]);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );

      const { status, user } = data;
      setUsername(user);
      if (status) {
        const hasShownLoginToast = localStorage.getItem("hasShownLoginToast");  // show the toast notification only once
        if (!hasShownLoginToast) {
          toast(`Hello ${user}`, {
            position: "top-right",
          });
          localStorage.setItem("hasShownLoginToast", "true");
        }
      } else {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    localStorage.removeItem("hasShownLoginToast"); // Clear the flag+
    removeCookie("token");
    navigate("/login");
  };
  Axios.get("http://localhost:4000/movies")
    .then((res) => {
      setFData(res.data);
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
    });
  return (
    <>
      <body>

        {/* <nav class="navbar sticky-top navbar-expand-lg "> */}
        <nav class="navbar sticky-top navbar-expand-lg fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src={logo}
                class="me-2 ps-0"
                height="40"
                alt="Logo"
              />
              <small> SMDB</small>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Service">Edit</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
              </ul>
              <form class="d-flex" >
                <button class="btn btn-outline-danger logoutButton" onClick={Logout}>Logout</button>
              </form>
            </div>
          </div>
        </nav>
        <br></br>





        {/* natak */}
        <>

          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images4.alphacoders.com/130/thumb-1920-1300724.jpg" height="600px" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fast and Furious 8</h5>
                  <p>Action/Adventure</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://static.toiimg.com/thumb/msid-72054154,imgsize-631570,width-400,resizemode-4/72054154.jpg" height="600px" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Tanhaji</h5>
                  <p>Action/Historical Film</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg" height="600px" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Dune: Part 1</h5>
                  <p>Action/Adventure</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.hindustantimes.com/img/2022/04/01/550x309/RRR-Movie-Review_1648825470847_1648825479894.jpg" height="600px" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>RRR</h5>
                  <p>Action/Drama</p>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <br></br>
        </>

        {/* natak */}




        <br></br>
        <center><h1 style={{ position: "center", fontFamily: "sans-serif" }}>Movies Sections</h1></center>
        <br></br>
        <br></br>
        <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
          {fdata.slice(-4).map((movies) => (
            <div className="col-md-3 col-lg-3 col-sm-6 mb-4" key={movies._id}>
              <div className="card shadow-sm">
                <img
                  src={movies.image}
                  className="card-img-top"
                  alt="movies Cover"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movies.title}</h5>
                  {/* <p className="card-text">
                    <strong>Author:</strong> {movies.author}
                  </p> */}
                  <p className="card-text">
                    <strong>Genre:</strong> {movies.genre}
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> {movies.year}
                  </p>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    {/* <a href={`/view`} className="viewButton">
                      View
                    </a> */}
                    <form action="/view" >
                      <button class="btn btn-danger viewButton" type="submit">View</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </body>
      <br />
      <hr></hr>
      <footer class="bg-light pb-5">
        <div class="container text-center">
          <div>
            <div>Contact US</div>
            <div>Phone:+91 5432106789</div>
            <div>E-Mail:smdb@gmail.com</div>
          </div>
          <p class="font-italic text-muted mb-0">
            &copy; Copyright  2023 SMDB Media & Entertainment. All rights reserved.
          </p>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Home;
