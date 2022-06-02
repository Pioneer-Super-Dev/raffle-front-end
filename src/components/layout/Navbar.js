import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand style={{ fontSize: "40px" }}>
            BTC Price Betting
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="light">CONNECT</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
