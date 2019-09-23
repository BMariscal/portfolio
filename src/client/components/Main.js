import React from "react";
import Projects from './Projects';
import Misc from './Misc';


const Main = () => {
  return (
    <div>
      <header className="card dark-mode">
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
                  className="btn card"
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
                  className="btn card"
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
                  className="btn card"
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
                  className="btn card"
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
        <div className="section first-section dark-mode">
          <div className="container dark-mode">
            <div className="row">
              <div className="row align-items-center justify-content-around">
                <div className="col-12 col-lg-5">
                  <img
                    className="img-fluid card brd"
                    src="https://i.imgur.com/bPuyQ23.jpg"
                    alt="me-again"
                  ></img>
                </div>
                <div className="col-12 col-lg-5">
                  <h2> Briceida </h2>
                  <h3> (pronounced Bree-say-dah) </h3>
                  <p>
                    Hey! I'm Briceida but I often go by Bri/Brie.
                    I'm a software engineer in San Francisco with industry experience as a backend web developer at a SaaS startup.
                    In my spare time, I volunteer as a mentor with Techtonica, draw and paint miniatures.
                    <br/>
                    You can read more about my software engineering journey <a href="https://medium.com/engineers-optimizely/from-security-guard-to-backend-engineer-how-the-i-own-it-scholarship-changed-my-life-ebf1d370ffc3"> <i>here.</i> </a>
                  </p>
                  <div>
                  <h4 className="big-tag"> Skills & Experience  </h4>
                  <div className="skills-name">
                  <div className="skills">
                  <ul className="card1">
                    <li className="grow">Python and JavaScript</li>
                  </ul>
                  </div>
                  </div>
                  <div className="skills-name">
                  <div className="skills">
                  <ul className="card1">
                    <li className="grow">Webapp2, Flask, Django, Node.js</li>
                    <li className="grow">Airflow, AWS, GCP, Docker, Kubernetes</li>
                    <li className="grow">MySQL, PostgresSQL, GCP datastore, MongoDB </li>
                    <li className="grow">Redis, Memcached, Celery</li>
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
       {<Misc/>}
      <footer>
          <div className="row align-items-center justify-content-around text-muted">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=briceidamariscal@gmail.com"
            target="_blank">
            created by Briceida
          </a>
        </div>
      </footer>
       </div>

    </div>
  );
};

export default Main;
