import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import per1 from "../../images/person/per1.JPG";
import per2 from "../../images/person/per2.JPG";
import per3 from "../../images/person/per3.JPG";
import per4 from "../../images/person/per4.JPG";
import StaffInfo from "../Layouts/StaffInfo";

export default function Contact() {
  return (
    <div className="contact-component">
      <h1 className="contact-heading-content">Our Team</h1>
      <div className="d-flex justify-content-center">
        <div className="contact-para-size">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptatum suscipit laboriosam? Et alias quo eveniet perferendis
            exercitationem saepe quae deleniti laborum sint aspernatur aut
            natus, magnam atque laudantium illo?
          </p>
        </div>
      </div>
      <Row>
        <Col lg={3}>
          <StaffInfo
            name="John Doe"
            staffrole="Digital Marketing Manager"
            image={per1}
          />
        </Col>
        <Col lg={3}>
          <StaffInfo name="Alex Man" staffrole="Design Manager" image={per2} />
        </Col>
        <Col lg={3}>
          <StaffInfo
            name="Tiffany McMahone"
            staffrole="Project Manager"
            image={per3}
          />
        </Col>
        <Col lg={3}>
          <StaffInfo
            name="Peter Parker"
            staffrole="Business Analyst Manager"
            image={per4}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail"></div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail"></div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="contact-layer">
        <h1 className="contact-heading-content">Contact</h1>
        <div className="d-flex justify-content-center">
          <h1>contact@website.com</h1> <br />
        </div>
        <div className="d-flex justify-content-center pb-5">
          <h1>+0 0000 0000</h1>
        </div>
        <br />
        <div className="justify-content-center d-flex font-family-contact">
          <Row>
            <Col lg={2}>
              <h3>Twitter&nbsp; &nbsp; </h3>
            </Col>
            <Col lg={2}>
              <h3>LinkedIn&nbsp; &nbsp; </h3>
            </Col>
            <Col lg={2}>
              <h3>Dribble&nbsp; &nbsp; </h3>
            </Col>
            <Col lg={2}>
              <h3>Youtube&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3>
            </Col>
            <Col lg={2}>
              <h3>Instagram&nbsp; &nbsp; </h3>
            </Col>
            <Col lg={2}>
              <h3>Facebook</h3>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
