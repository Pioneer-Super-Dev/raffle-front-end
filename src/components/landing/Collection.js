import React from "react";
import { connect } from "react-redux";

import x4 from "./../../assets/img/2x2.png";
import { Fade } from "react-reveal";

const Collection = () => {
  return (
    <section id="collection" style={{ padding: "100px 0px" }}>
      <div className="container">
        <Fade top>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              style={{ padding: "0px", textAlign: "center" }}
            >
              <img
                src={x4}
                style={{
                  maxWidth: "541px",
                  width: "90%",
                  margin: "0px",
                  marginLeft: "0",
                }}
                alt=""
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-up"
              style={{
                color: "rgb(255,255,255)",
                fontFamily: "'Comic Neue', serif",
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>
                A Collection of Soul Survivors
              </h1>
              <h5
                style={{
                  color: "#10f2d7",
                  fontWeight: "bold",
                  textShadow: "1px 1px var(--bs-blue)",
                }}
              >
                Grow your stable!
                <br />
              </h5>
              <p>
                Purchase new and exciting characters to enhance you’re your
                playing experience
                <br />
              </p>
              <h5
                style={{
                  color: "#10f2d7",
                  fontWeight: "bold",
                  textShadow: "1px 1px var(--bs-blue)",
                }}
              >
                Increase the value of your NFT
                <br />
              </h5>
              <p>
                Each season sees new characters that are added to the game as
                each variation of NFT characters are minted in limited amounts
                which depend on its rarity.Each season sees new characters that
                are added to the game as each variation of NFT characters are
                minted in limited amounts which depend on its rarity.
                <br />
              </p>
              <p>
                NFT value can be increased by the following character
                customizations:
                <br />- Animations
                <br /> - Boosters
                <br /> - Effects
                <br /> - Emotes
                <br /> - Fusion
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Collection;
