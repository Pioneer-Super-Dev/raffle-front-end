import React from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <section id="faq" style={{ padding: "100px 0px" }}>
      <Fade bottom>
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div
                className="text-center"
                style={{
                  padding: "60px 30px 30px 30px",
                  borderRadius: "50px",
                  background: "#3c2b5b",
                  color: "white",
                }}
              >
                <h1
                  style={{
                    fontFamily: "'Comic Neue', serif",
                    fontWeight: "bold",
                  }}
                >
                  <strong>Frequently Asked Questions</strong>
                  <br />
                </h1>
                <h5 style={{ fontFamily: "'Comic Neue', serif" }}>
                  <strong>Any questions you have we are here to answer.</strong>
                  <br />
                </h5>
                <div
                  className="accordion"
                  role="tablist"
                  id="accordion-1"
                  style={{
                    marginTop: "30px",
                    color: "rgb(0,0,0)",
                    fontFamily: "'Comic Neue', serif",
                  }}
                >
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "Comic Neue",
                          fontWeight: "bold",
                        }}
                      >
                        WHEN IS THE OFFICIAL LAUNCH?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          The official launch date will be the XX.XX.XXXX at 7PM
                          UTC.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="1"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        WHAT WILL BE THE PRICE?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                          Donec sollicitudin molestie malesuada.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="2"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        HOW MANY NFT’S CAN I MINT?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                          Donec sollicitudin molestie malesuada.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="3"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        HOW DO I GET WHITELISTED?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                          Donec sollicitudin molestie malesuada.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="4"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        WHERE I WILL BE ABLE TO SEE SOUL SURVIVORS NFT?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                          Donec sollicitudin molestie malesuada.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="5"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        HOW I CAN BUY A SOUL SURVIVORS NFT?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                          Donec sollicitudin molestie malesuada.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="5"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        WHY SOUL SURVIVORS?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                          Donec sollicitudin molestie malesuada.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div style={{ marginTop: "48px" }}>
                  <h5 style={{ fontFamily: "'Comic Neue', serif" }}>
                    <strong>Haven’t got your answer?&nbsp;</strong>
                    <a
                      href="https://twitter.com/soulsurvivors"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Contact us on Twitter
                    </a>
                    <br />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Faq;
