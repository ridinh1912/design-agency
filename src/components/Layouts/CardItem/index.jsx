import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "./style.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Button from "react-bootstrap/Button";

export default function CardItem(props) {
  return (
    <div className="justify-content-center d-flex">
      <div className="cart-item">
        <Card border="dark" className="card-style">
          <Card.Body className="card-body-style">
            <Card.Title>
              <h2>{props.title}</h2>
            </Card.Title>
            <Card.Text className="pt-2">{props.contents}</Card.Text>
          </Card.Body>
          <div className="d-flex justify-content-start card-button">
            <Button variant="link" className="button-style">
              See Details &nbsp;
              <HiOutlineArrowNarrowRight />
            </Button>
          </div>
          <Card.Footer text="white" className="cart-item-footer">
            <h5 className="cart-item-price">Starting at {props.price}</h5>
          </Card.Footer>
        </Card>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
CardItem.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  price: PropTypes.string,
};
