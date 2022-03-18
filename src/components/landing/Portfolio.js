import React from "react";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import bg from "./../../assets/img/logo 01.png";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const onMintNow = () => {
    navigate("/mint");
  };
  return (
    <section className="portfolio-block block-intro portfolio-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white" style={{ textAlign: "center" }}>
            <img
              data-bss-hover-animate="pulse"
              className="portofolio_img"
              src={bg}
              style={{ maxWidth: "560px", width: "80%" }}
              alt=""
            />
            <br />
            <h3 className="mt-5">
              Are you your koala's best friend? Your koala has the chance to go
              into space and wants to take his best friend with him. Are you his
              best friend?
            </h3>
            <button
              className="btn portofolio_connect_btn"
              type="button"
              style={{
                borderRadius: "5px",
                width: "195.234px",
                height: "70px",
                backgroundColor: "#0ea0ff",
                borderBottom: "5px solid #0d6efd",
                fontWeight: "bold",
                color: "white",
                fontSize: "23px",
              }}
              onClick={onMintNow}
            >
              Mint Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
