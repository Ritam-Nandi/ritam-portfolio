import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fblr1-3.fna.fbcdn.net/v/t1.0-9/c0.231.843.843a/p843x403/95597052_1244096885784236_2333799088782311424_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=JxJE1XxWxfUAX_i9UXr&_nc_ht=scontent.fblr1-3.fna&oh=cec071c8e93286f87fc538abb60d24d0&oe=5ED4C237"
              alt="myself"
              className="myself-image"
            />
            <div className="banner-text">
              <h1> Friendly Neighbourhood Developer</h1>
              <hr />
              <p>
                Java | React | JavaScript | NodeJS | APIs | Python | Networking{" "}
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ritam-nandi-9272a2137/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCbWCh-IEbl9bQp9ENkGGSew/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/Ritam-Nandi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Quora */}
                <a
                  href="https://www.quora.com/profile/Ritam-Nandi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-quora" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
