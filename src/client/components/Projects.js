import React from "react";

const Projects = () => {
  return (
    <div id="projects-div dark-mode">
      <section>
        <div className="container" id="projects">
          <div className="row  button0 button1 card brd">
            <div className="col text-center">
              <h2 className="big-tag1">Projects</h2>
             <section id="project1">
              <div className="r align-items-center justify-content-around container-fluid">
                <div className="text-center section justify button0">
                  <h3>Personal Website</h3>
                  <h5>Full stack JS/Python project deployed to AWS</h5>
                  <h5>September 2019</h5>
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
                      Containerized frontend and backend with Docker
                    </li>
                    <li>
                     Apigee API proxy with concurrent rate limit, spike arrest and API key
                    </li>
                    <li>
                    Containers deployed to AWS EC2 via AWS ECS and ECR
                    </li>
                    <li>
                     AWS loadbalancer listening on port 80 redirects to port 443
                    </li>
                    <li>
                    Registered domain via AWS Route 53 and acquired SSL certificate through the AWS Certificate Manager
                    </li>
                 </ul>

                  <h3>Eventger</h3>
                 <h5> Full stack JavaScript event aggregator</h5>
                 <h5>December 2017</h5>
                  <h6> <a href="https://github.com/BMariscal/Eventger">Github repo</a></h6>
                  <ul>
                   <li>
                      Group project (4 person team)
                    </li>
                    <li>
                      React/React Router 4 frontend; Node.js/Express/MySQL backend
                    </li>
                    <li>
                      Deployment pipeline: Travis CI, Mocha and Chai tests, Heroku containers
                    </li>
                   <li>
                     Authentication done with passportjs
                   </li>
                 </ul>
              </div>
          </div>
      </section>
       </div>
       </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
