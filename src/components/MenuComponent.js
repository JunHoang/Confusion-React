import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Media,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

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
  const menu = props.dishes.dishes.map((dish) => {
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
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
};

export default Menu;
