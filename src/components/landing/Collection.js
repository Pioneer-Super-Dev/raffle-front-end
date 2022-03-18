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
                Benefits
                <br />
              </h5>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                ac diam sit amet quam vehicula elementum sed sit amet dui.
                Curabitur aliquet quam id dui posuere blandit. <br />
                <br />
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                ac diam sit amet quam vehicula elementum sed sit amet dui.
                Curabitur aliquet quam id dui posuere blandit. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl
                tempus convallis quis ac lectus. Donec rutrum congue leo eget
                malesuada. Vivamus suscipit tortor eget felis porttitor
                volutpat.
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
                Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan
                tincidunt.
                <br />
              </p>
              <h5
                style={{
                  color: "#10f2d7",
                  fontWeight: "bold",
                  textShadow: "1px 1px var(--bs-blue)",
                }}
              >
                Rewards for holders
                <br />
              </h5>
              <p>
                Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan
                tincidunt.
                <br />
              </p>
              <h5
                style={{
                  color: "#10f2d7",
                  fontWeight: "bold",
                  textShadow: "1px 1px var(--bs-blue)",
                }}
              >
                Grow your NFT
                <br />
              </h5>
              <p>
                Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan
                tincidunt.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Collection;
