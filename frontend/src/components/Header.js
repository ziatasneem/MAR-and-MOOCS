import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

import "./Screen.css";
function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);

  return (
    <Navbar expand="lg" className="nav">
      <Container fluid className="container">
        {/* <img src="https://i.ibb.co/h9qGSHT/jisce.png" style={{ width: "50px" }} /> */}
        <Navbar.Brand>
          <img src="https://i.ibb.co/h9qGSHT/jisce.png" style={{ width: "50px" }} className="jisce" />
          <Link to="/" style={{ marginLeft: "20px" }}>Credential Meter</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              {" "}
              <Link to="/aboutus">About US</Link>
            </Nav.Link>

            <NavDropdown title="Ankur Sarkar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <Nav.Link >
                  <Link to="/dashboard">Dashboard</Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Nav.Link >
                  <Link to="/credits"> Credits </Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <img src="https://i.ibb.co/Bs10Fcz/jis.png" style={{ width: "50px" }} className="jis" />
      </Container>
    </Navbar>
  );
}

export default Header;
