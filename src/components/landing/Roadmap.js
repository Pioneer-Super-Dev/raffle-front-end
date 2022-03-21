import React from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";

const Roadmap = () => {
  return (
    <Fade bottom>
      <section id="roadmap" style={{ padding: "100px 0px" }}>
        <div
          className="container m-auto"
          data-aos="fade-up"
          style={{
            background: "#3c2b5b",
            padding: "60px 30px 30px 30px",
            borderRadius: "50px",
            color: "white",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h1
              style={{
                fontFamily: "'Comic Neue', serif",
                fontWeight: "bold",
              }}
            >
              <strong>The Soul Survivors NFT Roadmap</strong>
              <br />
            </h1>
            <h5
              style={{
                fontFamily: "'Comic Neue', serif",
                fontWeight: "bold",
              }}
            >
              <strong>
                Reports of a few Soul Survivors spotted in the metaverse.
              </strong>
              <br />
              <strong>Here's your compass for the journey...</strong>
              <br />
            </h5>
          </div>
          <div
            className="row"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div className="col-md-12">
              <Fade bottom>
                <div
                  className="d-xxl-flex"
                  data-aos="fade-up"
                  style={{
                    width: "auto",
                    height: "auto",
                    padding: "23px",
                    background: "#523f76",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', serif",
                    }}
                  >
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Praesent sapien massa, convallis a pellentesque nec,
                    egestas non nisi. Mauris blandit aliquet elit, eget
                    tincidunt nibh pulvinar a.
                    <br />
                  </h5>
                </div>
              </Fade>
              <Fade bottom>
                <div
                  className="d-flex d-xxl-flex flex-column justify-content-xxl-start"
                  data-aos="fade-up"
                  style={{
                    width: "auto",
                    height: "auto",
                    padding: "23px",
                    background: "#523f76",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <h3
                    style={{
                      color: "rgb(16,242,215)",
                      fontFamily: "'Comic Neue', serif",
                      fontWeight: "bold",
                    }}
                  >
                    Release of $Soul Token
                    <br />
                  </h3>
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', serif",
                    }}
                  >
                    Dec 17, 2021
                    <br />
                  </h5>
                </div>
              </Fade>
              <Fade bottom>
                <div
                  className="d-flex d-xxl-flex flex-column justify-content-xxl-start"
                  data-aos="fade-up"
                  style={{
                    width: "auto",
                    height: "auto",
                    padding: "23px",
                    background: "#523f76",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <h3
                    style={{
                      color: "rgb(16,242,215)",
                      fontFamily: "'Comic Neue', serif",
                      fontWeight: "bold",
                    }}
                  >
                    Release of Soul Survivors
                    <br />
                  </h3>
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', serif",
                    }}
                  >
                    <br />
                  </h5>
                </div>
              </Fade>
              <Fade bottom>
                <div
                  className="d-flex d-xxl-flex flex-column justify-content-xxl-start"
                  data-aos="fade-up"
                  style={{
                    width: "auto",
                    height: "auto",
                    padding: "23px",
                    background: "#523f76",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  <h3
                    style={{
                      color: "rgb(16,242,215)",
                      fontFamily: "'Comic Neue', serif",
                      fontWeight: "bold",
                    }}
                  >
                    Releasing of Seasons
                    <br />
                  </h3>
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', serif",
                    }}
                  >
                    We will release a new season with new maps and
                    characters/variations every quarter.
                  </h5>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Roadmap;
