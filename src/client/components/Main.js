import React from "react";
import Projects from './Projects';


const Main = () => {
  return (
    <div>
      <header>
        <section id="main">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <a
                  style={{
                    color: "#062c4a",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn-outline-light btn-lg simple"
                  href="https://www.linkedin.com/in/briceida-mariscal/"
                  target="_blank"
                >
                 LinkedIn
                </a>

                <a
                  style={{
                    color: "#083658",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn-outline-light btn-lg simple"
                  href="https://www.github.com/BMariscal/"
                  target="_blank"
                >
                  GitHub
                </a>

                <a
                  style={{
                    color: "#083658",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn-outline-light btn-lg simple"
                  href="https://twitter.com/briceidamars"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  style={{
                    color: "#083658",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn-outline-light btn-lg simple"
                  href="https://deviantart.com/bmariscal/"
                  target="_blank"
                >
                  DeviantArt
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section id="aboutme">
        <div class="section first-section">
          <div class="container">
            <div class="row">
              <div class="row align-items-center justify-content-around">
                <div class="col-12 col-lg-5">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/bPuyQ23.jpg"
                    alt="me-again"
                  ></img>
                </div>
                <div class="col-12 col-lg-5">
                  <h2> Briceida </h2>
                  <h3> (pronounced Bree-say-dah) </h3>
                  <p>
                    FullStack Software Engineer with 1.5 years of experience
                    as a web application backend Software Engineer.
                  </p>
                  <div>
                  <h4 class="big-tag"> Skills & Experience  </h4>
                  <div className="skills-name">
                  <div className="skills">
                  <ul>
                    <li className="grow">Python and JavaScript</li>
                  </ul>
                  </div>
                  </div>
                  <div className="skills-name">
                  <div className="skills">
                  <ul>
                    <li className="grow">Webapp2, Flask, Django, Node.js</li>
                    <li className="grow">AWS, GCP, Docker, Kubernetes</li>
                    <li className="grow">MySQL, PostgresSQL, Google Cloud datastore, MongoDB </li>
                    <li className="grow">Redis, Celery, Memcached</li>
                    <li className="grow">React, Redux</li>
                    <li className="grow">Auth0</li>
                    <li className="grow">GraphQL</li>
                  </ul>
                 </div>
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div>
       {<Projects/>}
      <footer>

          <div class="row align-items-center justify-content-around text-muted">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=briceidamariscal@gmail.com"
            target="_blank">
            briceidamariscal@gmail.com
          </a>
        </div>
      </footer>
       </div>

    </div>
  );
};

export default Main;
