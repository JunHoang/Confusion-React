import React, { Component, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import useScroll from "../hooks/useScroll";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isNavOpen: false,
  //     isModalOpen: false,
  //   };

  //   this.toggleNav = this.toggleNav.bind(this);
  //   this.toggleModal = this.toggleModal.bind(this);
  //   this.handleLogin = this.handleLogin.bind(this);
  // }

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleLogin(event) {
    this.toggleModal();
    alert(
      " Username: " +
        form.username.value +
        " Password: " +
        form.password.value +
        " Remember: " +
        form.remember.checked
    );
    event.preventDefault();
  }

  const scrollPosition = useScroll();
  console.log("scrollPosition", scrollPosition);

  return (
    <React.Fragment>
      <Navbar
        dark
        expand="md"
        className="fixed-top"
        style={{
          backgroundColor:
            scrollPosition > 50 || isNavOpen ? "black" : "transparent",
        }}
      >
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Hungry React"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  activeClassName="text-warning"
                  className="nav-link"
                  to="/home"
                >
                  <span className="fa fa-home fa-lg"> Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="text-warning"
                  to="/aboutus"
                >
                  <span className="fa fa-info fa-lg"> About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="text-warning"
                  to="/menu"
                >
                  <span className="fa fa-list fa-lg"> Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeClassName="text-warning"
                  to="/contactus"
                >
                  <span className="fa fa-address-card fa-lg"> Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline onClick={toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <Jumbotron className="img-heading">
        <div className="container">
          <div class="row row-header">
            <div className="col-12 col-md-6 mt-5">
              <h1>Hungry React Restaurant</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => (form.username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (form.password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  innerRef={(input) => (form.remember = input)}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default Header;
