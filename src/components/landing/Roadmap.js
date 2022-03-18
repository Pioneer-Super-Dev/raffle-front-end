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
                    Release date announcement
                    <br />
                  </h3>
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', serif",
                    }}
                  >
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
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
                    Release
                    <br />
                  </h3>
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', serif",
                    }}
                  >
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    <br />
                  </h5>
                </div>
              </Fade>
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
                    Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula.
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
                    Reward System
                    <br />
                  </h3>
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontFamily: "'Comic Neue', serif",
                    }}
                  >
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Donec rutrum congue leo eget malesuada. Nulla quis
                    lorem ut libero malesuada feugiat. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Curabitur
                    arcu erat, accumsan id imperdiet et, porttitor at sem.
                  </h5>
                </div>
              </Fade>
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
                    Pellentesque in ipsum id orci porta dapibus. Pellentesque in
                    ipsum id orci porta dapibus. Nulla porttitor accumsan
                    tincidunt.
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
