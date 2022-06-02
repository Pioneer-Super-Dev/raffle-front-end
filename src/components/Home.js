import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import ReactInterval from "react-interval";
import { io } from "socket.io-client";

export default function Home() {
  const [btcPrice, setBTCPrice] = useState(0);
  const [btcPriceTimeout, setBTCPriceTimeout] = useState(60000);
  const [secondTimeout, setSecondTimeout] = useState(1000);
  const [enabled, setEnabled] = useState(true);
  const [timeCounter, setTimeCounter] = useState(0);

  useEffect(() => {
    initialSocket();
    getBTCPrice();
  }, []);

  const initialSocket = () => {
    const socket = io("http://localhost:5001");
    socket.on("connect", () => console.log(`Socket Id: ${socket.id}`));
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000);
    });
    socket.on("bettingdata", (data) => {
      console.log(JSON.parse(data));
    });
    socket.on("disconnect", () => console.log("server disconnected"));
  };

  const getBTCPrice = () => {
    var config = {
      method: "get",
      url: "https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setBTCPrice(response.data.coin.price.toFixed(0));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const secondCounter = () => {
    setTimeCounter(timeCounter++);
  };

  return (
    <Container className="mt-5">
      <ReactInterval
        {...{ btcPriceTimeout, enabled }}
        callback={() => getBTCPrice()}
      />
      <ReactInterval
        {...{ secondTimeout, enabled }}
        callback={() => secondCounter()}
      />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "600px",
            background: "#417ed9",
            borderRadius: "20px",
            padding: "20px",
            color: "#fff",
            fontSize: "50px",
          }}
        >
          BTC Price: {btcPrice} USD
        </div>
      </div>
      <div
        style={{
          margin: "50px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
          alt="bitcoin-7d-price-graph"
          width="600px"
          loading="lazy"
        />
      </div>
      <div>
        <Table
          striped
          bordered
          hover
          style={{ textAlign: "center", verticalAlign: "middle" }}
        >
          <thead>
            <tr>
              <th>Betting Time</th>
              <th>Waitting Time</th>
              <th>BTC Price</th>
              <th>My Betting</th>
              <th>Result</th>
              <th>Prize</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-05-29 06:00 ~ 2022-05-29 06:15</td>
              <td>2022-05-29 06:15 ~ 2022-05-29 06:30</td>
              <td>28853</td>
              <td style={{ fontSize: "30px", color: "green" }}>
                <BsFillCaretUpFill />
              </td>
              <td style={{ fontSize: "30px", color: "red" }}>
                <BsFillCaretDownFill />
              </td>
              <td></td>
              <td>
                <Button
                  variant="outline-primary"
                  style={{
                    fontSize: "30px",
                    color: "green",
                    marginRight: "30px",
                  }}
                >
                  <BsFillCaretUpFill />
                </Button>
                <Button
                  variant="outline-primary"
                  style={{ fontSize: "30px", color: "red" }}
                >
                  <BsFillCaretDownFill />
                </Button>
              </td>
            </tr>

            <tr>
              <td>2022-05-29 06:15 ~ 2022-05-29 06:30</td>
              <td>2022-05-29 06:30 ~ 2022-05-29 06:45</td>
              <td>28853</td>
              <td style={{ fontSize: "30px", color: "green" }}>
                <BsFillCaretUpFill />
              </td>
              <td style={{ fontSize: "30px", color: "red" }}>
                <BsFillCaretDownFill />
              </td>
              <td>1.5</td>
              <td>Ended</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
