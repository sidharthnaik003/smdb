import React from "react";
import libraryImage from "../images/lib_movies.jpg";
import './about.css';
const About = () => {
  return (
    <>
      {/* body */}

      <section class="hero">
        <div className='heading'>
          <h1>About Us</h1>
        </div>
        <div class="container1">
          <div class="hero-content">
            <h2>SMDB:</h2>
            <p>
              Welcome to SMDB (Sahyadri Movie Data Base),
              SMDB is a passion project born out of a love for movies and a desire to create a user-friendly platform for movie enthusiasts of all levels. Our team of dedicated cinephiles has worked tirelessly to bring you a seamless experience in exploring, discovering, and discussing the world of cinema.

            </p>
          </div>
          <div class="hero-content">
            <h2> Mission:</h2>
            <p>
               At SMDB, our mission is to provide a platform where users can dive into the world of movies effortlessly. Whether you're a casual viewer or a die-hard film buff, we want SMDB to be your go-to destination for all things movies. From classic blockbusters to hidden gems, we aim to curate a diverse collection to cater to every taste.

            </p>
          </div>
          <div class="hero-content">
            <h2>Vision: </h2>
            <p>
              SMDB (Sahyadri Movie Data Base)
              Our Vision for the Future:
              We envision SMDB as a dynamic platform that continues to evolve with the needs and preferences of our users. Our roadmap includes exciting features like personalized recommendations, enhanced search filters, and collaborative content creation.

            </p>
          </div>
          <div class="hero-image">
            <img class="img1" src={libraryImage}></img>

          </div>
        </div>
      </section>

      {/* end of body */}

      {/* footer */}

      <footer class="bg-light pb-5">
        <div class="container text-center">
          <div>
            <div>Contact US</div>
            <div>Phone:+91 5432106789</div>
            <div>e-mail: smdb@gmail.com</div>
          </div>
          <p class="font-italic text-muted mb-0">
            &copy; Copyright © 2023 SMDB Media & Entertainment. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;
