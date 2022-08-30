import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
export default function Footer() {
  return (
    <div className="footer-component">
      <Row>
        <Col lg={6}>
          <h5 className="content-contact">2022 Creatives</h5>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-center">
            <Row>
              <Col>
                <h5>Privacy Policy</h5>
              </Col>
              <Col style={{ width: "300px" }}>
                <h5>Term and Conditions</h5>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
