import React from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";

import founder1 from "./../../assets/img/2.png";
import founder2 from "./../../assets/img/3.png";
import founder3 from "./../../assets/img/4.png";

const Founders = () => {
  return (
    <section id="founders" style={{ padding: "100px 0px" }}>
      <div className="container">
        <Fade top>
          <div data-aos="fade-down">
            <p
              style={{
                marginBottom: "0px",
                fontFamily: "'Comic Neue', serif",
                fontWeight: "bold",
                color: "rgb(166,151,193)",
                textAlign: "center",
              }}
            >
              YOUR FRENS&nbsp; THROUGH THE METAVERSE
            </p>
            <h1
              style={{
                fontFamily: "'Comic Neue', serif",
                fontWeight: "bold",
                textShadow: "0px 2px var(--bs-blue)",
                textAlign: "center",
                color: "rgb(255,255,255)",
                marginBottom: "51px",
              }}
            >
              The Space Koalas Founders
            </h1>
          </div>
        </Fade>
        <div className="row">
          <Fade left>
            <div
              className="col-md-4"
              data-aos="fade-right"
              style={{ textAlign: "center" }}
            >
              <div>
                <img
                  className="border rounded-circle border-dark"
                  src={founder1}
                  style={{ maxWidth: "272px", width: "70%" }}
                  alt=""
                />
              </div>
              <div style={{ color: "rgb(255,255,255)", paddingTop: "24px" }}>
                <h2
                  style={{
                    fontFamily: "'Comic Neue', serif, font-weight: bold",
                  }}
                >
                  Kathrin
                </h2>
                <p style={{ marginBottom: "-17px" }}>Designer</p>
                {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div
              className="col-md-4"
              data-aos="fade-right"
              style={{ textAlign: "center" }}
            >
              <div>
                <img
                  className="border rounded-circle border-dark"
                  src={founder2}
                  style={{ maxWidth: "272px", width: "70%" }}
                  alt=""
                />
              </div>
              <div style={{ color: "rgb(255,255,255)", paddingTop: "24px" }}>
                <h2
                  style={{
                    fontFamily: "'Comic Neue', serif, font-weight: bold",
                  }}
                >
                  Leon
                </h2>
                <p style={{ marginBottom: "-17px" }}>Designer</p>
                {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
              </div>
            </div>
          </Fade>
          <Fade right>
            <div
              className="col-md-4"
              data-aos="fade-right"
              style={{ textAlign: "center" }}
            >
              <div>
                <img
                  className="border rounded-circle border-dark"
                  src={founder3}
                  style={{ maxWidth: "272px", width: "70%" }}
                  alt=""
                />
              </div>
              <div style={{ color: "rgb(255,255,255)", paddingTop: "24px" }}>
                <h2
                  style={{
                    fontFamily: "'Comic Neue', serif, font-weight: bold",
                  }}
                >
                  Paul
                </h2>
                <p style={{ marginBottom: "-17px" }}>Blockchain Expert</p>
                {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div
              className="col-md-4 mt-5"
              data-aos="fade-right"
              style={{ textAlign: "center" }}
            >
              <div>
                <img
                  className="border rounded-circle border-dark"
                  src={founder3}
                  style={{ maxWidth: "272px", width: "70%" }}
                  alt=""
                />
              </div>
              <div style={{ color: "rgb(255,255,255)", paddingTop: "24px" }}>
                <h2
                  style={{
                    fontFamily: "'Comic Neue', serif, font-weight: bold",
                  }}
                >
                  Marc
                </h2>
                <p style={{ marginBottom: "-17px" }}>Investor</p>
                {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div
              className="col-md-4 mt-5"
              data-aos="fade-right"
              style={{ textAlign: "center" }}
            >
              <div>
                <img
                  className="border rounded-circle border-dark"
                  src={founder1}
                  style={{ maxWidth: "272px", width: "70%" }}
                  alt=""
                />
              </div>
              <div style={{ color: "rgb(255,255,255)", paddingTop: "24px" }}>
                <h2
                  style={{
                    fontFamily: "'Comic Neue', serif, font-weight: bold",
                  }}
                >
                  Robert
                </h2>
                <p style={{ marginBottom: "-17px" }}>Co-Founder</p>
                {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div
              className="col-md-4 mt-5"
              data-aos="fade-right"
              style={{ textAlign: "center" }}
            >
              <div>
                <img
                  className="border rounded-circle border-dark"
                  src={founder2}
                  style={{ maxWidth: "272px", width: "70%" }}
                  alt=""
                />
              </div>
              <div style={{ color: "rgb(255,255,255)", paddingTop: "24px" }}>
                <h2
                  style={{
                    fontFamily: "'Comic Neue', serif, font-weight: bold",
                  }}
                >
                  Neil
                </h2>
                <p style={{ marginBottom: "-17px" }}>Co-Founder</p>
                {/* <p><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/></p> */}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Founders;
