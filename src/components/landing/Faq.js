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
                          Since our main goal is mass adoption we want a larger
                          player base, by keeping our acquisition cost for each
                          NFT as low as possible around .1 BNB to for starting
                          characters.
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
                          Since Mass adoption is our goal there is no need to
                          mint characters to enjoy the game. Players can
                          automatically enjoy the character by using the free
                          character and/or purchasing the pre minted NFTs. This
                          allows the players to jump right into the game making
                          it more seamless and allows a us to reach a wider
                          audience without having to needlessly complicate the
                          experience for them.
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
                        WHAT ARE ABILITIES?
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
                        IS THERE ANYWAY I CAN GIVE MY CHARACTER AN EDGE?
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
                          Soul Survivors NFTs can be bought/sold/auctioned in
                          our marketplace and can also be sold in the Binance
                          Marketplace as well.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="6"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        HOW CAN I EARN?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          The main way to earn inside the game is by winning
                          games and each player has a daily limit to the number
                          of times you can play them called a charge. Player
                          characters who obtain boosters and those fused
                          characters with higher charges and rarer abilities can
                          be sold on the secondary market as independent NFTs
                          for others who want to choose that option instead. If
                          a player does not have access to any special
                          characters, they will be given a free character with
                          limited charges and no abilities. All players can earn
                          $Soul from the game regardless of what character they
                          play with. However, players can earn more when playing
                          with a minted character.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="7"
                      className="accordion-item"
                      style={{ padding: "14px" }}
                    >
                      <Accordion.Header
                        style={{
                          fontFamily: "'Comic Neue', serif",
                          fontWeight: "bold",
                        }}
                      >
                        HOW DO YOU PLAN TO INCREASE THE VALUE OF $SOUL TOKENS?
                        WHY SOUL SURVIVORS?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-collapse collapse show item-1">
                        <p className="mb-0">
                          The value of Soul Survivor paid characters, boosters,
                          effects, and as such will increase the value of $Soul
                          because they are integral to the gameplay. For
                          example, free players can still earn $Soul but in
                          order to win more they will want to buy unique
                          Survivor Characters and boosters to create more unique
                          fused characters which in-turn also create demand for
                          the $Soul used to create those characters in the first
                          place. The characters can then be sold on the open
                          market for $BNB. Then traded for more $Souls to buy
                          exclusive animation, emotes and effects inside our
                          game creating more demand.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="8"
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
                          Soul Survivors places itself in a unique position by
                          putting the player experience first, making player
                          enjoyment at the forefront of the game. The gameplay
                          itself is familiar yet unique allowing for a gaming
                          experience which leaves it users asking for more.
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
