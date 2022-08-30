import React from "react";
import "./style.css";
import CardItem from "../Layouts/CardItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Services() {
  return (
    <div className="services-component">
      <h1 className="services-heading-content">Services</h1>
      <div className="card-item pb-5">
        <Container>
          <Row>
            <Col lg={6}>
              <CardItem
                title="Graphic Design"
                contents="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                price="$400"
              />
            </Col>
            <Col lg={6}>
              <CardItem
                title="Product Design"
                contents="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                price="$350"
              />
            </Col>
            <Col lg={6}>
              <CardItem
                title="Web Design"
                contents="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                price="$800"
              />
            </Col>
            <Col lg={6}>
              <CardItem
                title="Video Editing"
                contents="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                price="$500"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
