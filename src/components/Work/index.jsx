import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import hinh1 from "../../images/hinh1.jpg";
import hinh2 from "../../images/hinh2.jpg";
import hinh3 from "../../images/hinh3.jpg";
import hinh4 from "../../images/hinh4.jpg";
import hinh5 from "../../images/hinh5.jpg";
import hinh6 from "../../images/hinh6.jpg";
import Button from "react-bootstrap/Button";

export default function Work() {
  return (
    <div className="work-component">
      <div className="d-flex justify-content-center work-heading">
        <h1 className="work-heading-content font-weight-bold">Work</h1>
      </div>
      <Row>
        <Col lg={6}>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail">
                  <h1>
                    <b>Abstract Design</b>
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis officiis voluptatum dignissimos, ducimus nesciunt
                    iure modi voluptate, natus dolorum, harum molestias fugit.
                    Soluta quaerat natus assumenda, omnis est dolorum nulla?
                  </p>
                </div>
                <Button variant="link" className="button-style">
                  See Project &nbsp;
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>
            </div>
            <img src={hinh1} alt="" className="img-size" />
          </div>
        </Col>
        <Col>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail">
                  <h1>
                    <b>Vector Design</b>
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis officiis voluptatum dignissimos, ducimus nesciunt
                    iure modi voluptate, natus dolorum, harum molestias fugit.
                    Soluta quaerat natus assumenda, omnis est dolorum nulla?
                  </p>
                </div>
                <Button variant="link" className="button-style">
                  See Project &nbsp;
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>
            </div>
            <img src={hinh2} alt="" className="img-size" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail">
                  <h1>
                    <b>Brand Design</b>
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis officiis voluptatum dignissimos, ducimus nesciunt
                    iure modi voluptate, natus dolorum, harum molestias fugit.
                    Soluta quaerat natus assumenda, omnis est dolorum nulla?
                  </p>
                </div>
                <Button variant="link" className="button-style">
                  See Project &nbsp;
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>
            </div>
            <img src={hinh3} alt="" className="img-size" />
          </div>
        </Col>
        <Col>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail">
                  <h1>
                    <b>Premium Design</b>
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis officiis voluptatum dignissimos, ducimus nesciunt
                    iure modi voluptate, natus dolorum, harum molestias fugit.
                    Soluta quaerat natus assumenda, omnis est dolorum nulla?
                  </p>
                </div>
                <Button variant="link" className="button-style">
                  See Project &nbsp;
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>
            </div>
            <img src={hinh4} alt="" className="img-size" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail">
                  <h1>
                    <b>Robot Design</b>
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis officiis voluptatum dignissimos, ducimus nesciunt
                    iure modi voluptate, natus dolorum, harum molestias fugit.
                    Soluta quaerat natus assumenda, omnis est dolorum nulla?
                  </p>
                </div>
                <Button variant="link" className="button-style">
                  See Project &nbsp;
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>
            </div>
            <img src={hinh5} alt="" className="img-size" />
          </div>
        </Col>
        <Col>
          <div className="item">
            <div className="description">
              <div className="description-content">
                <div className="description-detail">
                  <h1>
                    <b>Draw Design</b>
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis officiis voluptatum dignissimos, ducimus nesciunt
                    iure modi voluptate, natus dolorum, harum molestias fugit.
                    Soluta quaerat natus assumenda, omnis est dolorum nulla?
                  </p>
                </div>
                <Button variant="link" className="button-style">
                  See Project &nbsp;
                  <HiOutlineArrowNarrowRight />
                </Button>
              </div>
            </div>
            <img src={hinh6} alt="" className="img-size" />
          </div>
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
    </div>
  );
}
