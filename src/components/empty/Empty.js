import React from "react";
import { Link } from "react-router-dom";
import "./css/Empty.css";

function Empty({ text, icon }) {
  return (
    <div className="container">
      <div className="empty__container">
        <h3>{text}da hozircha mahsulot yo'q</h3>
        <p>Mahsulotdagi {icon} belgisi bilan mahsulot qo'shing</p>
        <Link to={"/"} className="btn btn-primary">
          Bosh sahifa
        </Link>
      </div>
    </div>
  );
}

export default Empty;
