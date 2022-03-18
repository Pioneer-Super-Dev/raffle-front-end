import React from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";

import planet_with_cards from "./../../assets/img/survivors.png";

const Introduce = () => {
  return (
    <section id="introduce" style={{ padding: "100px 0px" }}>
      <div className="container">
        <div className="row align-items-center">
          <Fade left>
            <div
              className="col-md-6"
              data-aos="fade-right"
              style={{
                color: "rgb(255,255,255)",
                fontFamily: "'Comic Neue', serif",
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>Soul Survivors</h1>
              <h5
                style={{
                  color: "#10f2d7",
                  fontWeight: "bold",
                  textShadow: "1px 1px var(--bs-blue)",
                }}
              >
                What is Soul Survivors?
                <br />
              </h5>
              <p>
                Cras ultricies ligula sed magna dictum porta. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula.
                <br />
                <br />
                Sed porttitor lectus nibh. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi.
                <br />
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-6" data-aos="fade-left">
              <img
                src={planet_with_cards}
                style={{
                  maxWidth: "634px",
                  width: "100%",
                  textAlign: "center",
                  margin: "0px",
                  marginTop: "50px",
                  marginLeft: "0",
                }}
                alt=""
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
