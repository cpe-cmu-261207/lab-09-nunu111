import React from "react";
import Navbar from "../components/Navbar";

export default function Mainlayout(props) {
  return (
    <div
      className="p-3 "
      style={{
        minHeight: "100vh",
        backgroundColor: "#8e7ed6",
        fontFamily: "Kanit, sans-serif",
      }}
    >
      <div className="bg-white m-5 rounded-5">
        <Navbar tyle={{ fontSize: "50px" }} />
        {props.children}
      </div>
    </div>
  );
}
