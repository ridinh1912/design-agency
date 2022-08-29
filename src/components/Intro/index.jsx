import React from "react";
import Row from "react-bootstrap/Row";
import "./style.css";

export default function Intro() {
  return (
    <div className="intro-view d-flex justify-content-center">
      <Row className="intro-content">
        <h1 className="d-flex justify-content-center heading-item">
          Creative
          <br />
          Innovative
          <br />
          Design Agency
        </h1>
        <div className="d-flex justify-content-center">
          <div className="para-size">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatum suscipit laboriosam? Et alias quo eveniet
              perferendis exercitationem saepe quae deleniti laborum sint
              aspernatur aut natus, magnam atque laudantium illo?
            </p>
          </div>
        </div>
      </Row>
    </div>
  );
}
