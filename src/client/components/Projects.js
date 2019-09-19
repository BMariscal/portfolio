import React from "react";

const Projects = () => {
  return (
    <div id="projects-div">
      <section>
        <div class="container" id="projects">
          <div class="row">
            <div class="col text-center">
              <h2 className="big-tag">Projects</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="Info">
              <div className="r align-items-center justify-content-around container-fluid">
                <div className="text-center section first-section align-items-center justify">
                  <h3>Personal Website</h3>
                 <h5>Full Stack project </h5>
                  <h6> <a href="https://briceidam.com/">This website</a></h6>
                  <h6> <a href="https://github.com/BMariscal/portfolio">Github repo</a></h6>
                  <ul>
                    <li>
                      Frontend built using React, React Router 4, Webpack and Babel
                    </li>
                    <li>
                      Backend built using Flask, PostgresSQL, SQLAlchemy and the Alembic migration tool
                    </li>
                   <li>
                     Nginx reverse proxy to serve frontend static assets on page reload
                   </li>
                    <li>
                     Apigee API proxy
                    </li>
                    <li>
                      Dockerized frontend and backend
                    </li>
                    <li>Containers deployed to AWS EC2 via AWS ECR</li>
                  </ul>
                </div>
            </div>
      </section>
    </div>
  );
};

export default Projects;
