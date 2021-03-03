import React from "react";
import { Card, CardImg, Media, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function RenderMenuItem({ dish }) {
  return (
    <div id="menu" key={dish._id} className="col-12">
      <Media tag="li" className="py-2">
        <Card
          className="mr-4 border-0"
          style={{ width: "150px", height: "150px" }}
        >
          <Link to={`/menu/${dish._id}`}>
            <CardImg src={dish.image} alt={dish.name} />
          </Link>
        </Card>
        <Media body className="mr-5">
          <Media heading>{dish.name}</Media>
          <p className="text-muted">{dish.description}</p>
        </Media>
        <h5>{dish.price}</h5>
      </Media>
      <hr />
    </div>
  );
}

const Menu = (props) => {
  const mains = props.dishes.dishes.filter(
    (mainDish) => mainDish.category === "mains"
  );

  const desserts = props.dishes.dishes.filter(
    (mainDish) => mainDish.category === "dessert"
  );

  const drinks = props.dishes.dishes.filter(
    (mainDish) => mainDish.category === "drink"
  );

  const mainsMenu = mains.map((dish) => {
    return (
      <div key={dish._id} className="col-12 col-md-6">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  const dessertsMenu = desserts.map((dish) => {
    return (
      <div key={dish._id} className="col-12 col-md-6">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  const drinksMenu = drinks.map((dish) => {
    return (
      <div key={dish._id} className="col-12 col-md-6">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
          </div>
        </div>
        <div>
          <Tabs defaultActiveKey="mains" id="menu">
            <Tab eventKey="mains" title="Mains">
              <div className="row">{mainsMenu}</div>
            </Tab>
            <Tab eventKey="desserts" title="Desserts">
              <div className="row">{dessertsMenu}</div>
            </Tab>
            <Tab eventKey="drinks" title="Drinks">
              <div className="row">{drinksMenu}</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
};

export default Menu;
