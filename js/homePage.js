let homePage = `
      <div class="ftco-section about-section">
            <div id="about" class="container">
                <div class="row d-flex" data-scrollax-parent="true">
                    <div class="col-md-2"></div>
                    <div class="col-md-6 wrap ftco-animate">
                        <div class="about-desc">
                          <h1 class="bold-text" id="about">About</h1>
                        <div class="p-5">
                          <p>
                          Master student, Interactive Media Technology | Kungliga tekniska högskolan, 
                          with an interest for front-end development, design, web accessibility and project management. 
                          </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                      <img src="images/portfolio.jpg" alt="profilepicture" style="height: 300px; width: 200px;"/>
                    </div>
                </div>
            </div>
      </div>
      <div class="ftco-section" id="portfolio">
        <div id="projects" class="container">
            <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
                <span>Portfolio</span>
                <h2>Checkout my projects</h2>
            </div>
            </div>
            <!-- <div class="row justify-content-center mb-5 pb-5"></div> -->
            <div id="demo" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                  <li data-target="#demo" data-slide-to="3"></li>
              </ul>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <a
                      href="#"
                      onclick="onNavigate('/projects'); return false;"
                  >
                      <img src="images/jobviz.png" alt="JobVis" />
                  </a>
                  <div class="carousel-caption">
                      <h3 style="color:black">Information Visualization</h3>
                  </div>
                </div>
                <div class="carousel-item">
                  <a
                    href="#"
                    onclick="onNavigate('/projects'); return false;"
                  >
                    <img src="images/ivisproj.png" alt="Ivis project" />
                  </a>
                  <div class="carousel-caption">
                    <h3 style="color:black">Information Visualization</h3>
                  </div>
                </div>
                <div class="carousel-item">
                  <a
                    href="#"
                    onclick="onNavigate('/projects'); return false;"
                  >
                    <img src="images/ipark.png" alt="iParkInStan" />
                  </a>
                  <div class="carousel-caption">
                    <h3 style="color:black">Geolocation</h3>
                  </div>
                </div>
                <div class="carousel-item">
                  <a
                    href="#"
                    onclick="onNavigate('/projects'); return false;"
                  >
                    <img src="images/pongar.png" alt="PongAR" />
                  </a>
                  <div class="carousel-caption">
                    <h3 style="color:black">AR</h3>
                  </div>
                </div>
              </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
            </div>
        </div>
      </div>

      <div class="ftco-section ftco-counter" id="section-counter">
        <div id="achievements" class="container">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <h2>My achievements</h2>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-5 col-sm-5 counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <span class="ftco-label">Projects</span>
                  <strong class="number" data-number="4">0</strong>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-5 counter-wrap ftco-animate">
              <div class="block-18">
                <div class="text">
                  <span class="ftco-label">Cups of coffee</span>
                  <strong class="number" data-number="934">0</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
