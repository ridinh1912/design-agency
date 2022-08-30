import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function StaffInfo(props) {
  return (
    <div>
      <div className="item">
        <div className="description description-size">
          <div className="description-content">
            <div className="description-detail">
              <h1>
                <b>{props.name}</b>
              </h1>
              <h4 className="text-secondary">{props.staffrole}</h4>
            </div>
          </div>
        </div>
        <img src={props.image} alt="" className="img-size" />
      </div>
    </div>
  );
}
StaffInfo.propTypes = {
  name: PropTypes.string,
  staffrole: PropTypes.string,
  image: PropTypes.string,
};
