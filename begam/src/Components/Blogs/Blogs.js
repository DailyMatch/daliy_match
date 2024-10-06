import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Blogs = () => {
  return (
    <>
    <Navbar/>
      <section id="banner-section" class="inner-banner">
        <div class="ani-img">
          <img class="img-1" src="images/banner-circle-1.png" alt="icon" />
          <img class="img-2" src="images/banner-circle-2.png" alt="icon" />
          <img class="img-3" src="images/banner-circle-2.png" alt="icon" />
        </div>

        <div class="banner-content d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="main-content">
                  <h1>Tournament Blog</h1>
                  <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb"></nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us-section">
        <div class="overlay pt-120">
          <div class="container wow fadeInUp">
            <div class="main-container">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <div class="section-header text-center">
                    <h2 class="title">BGMI Daily tournaments are Live</h2>
                    <p>
                      Get ready for thrilling BGMI tournaments daily on
                      DailyMatch.in India's premier esports platform brings you
                      exclusive Battlegrounds Mobile India matches. Compete with
                      top players, win big, and climb the ranks. Pay entry fees,
                      join tournaments, and showcase your skills. Daily Match
                      offers 12/7 BGMI tournaments. Register now and start
                      playing!
                    </p>

                    <img src="images/Begam.jpeg" />
                    <p>
                      Level up your gaming experience! Are you playing BGMI for
                      fun? Now, play for BIG PRIZES! Showcase your skills to the
                      world and get a chance to WIN BIG!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Blogs;
