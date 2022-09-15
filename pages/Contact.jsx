import React from "react";
import Mainlayout from "../layouts/Mainlayout";

export default function Contact() {
  return (
    <Mainlayout>
      <br />
      <p className="c-text text-center fw-bold">ติดต่อได้ที่</p>
      <img
        src="img/nu.jpg"
        className="rounded-circle center_img profile border border-dark border-4"
      />
      <div className="text-center detail">
        <span className="fw-bold">ชื่อจริง: </span>
        <span>ภาณุวัฒน์ เงินท๊อก</span>
        <br />
        <span className="fw-bold">ชื่อเล่น: </span>
        <span>นุ</span>
        <br />
        <span className="fw-bold"> Facebook: </span>
        <a
          href="https://www.facebook.com/Nunu111za/"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          https://www.facebook.com/Nunu111za/
        </a>
        <br />
        <span className="fw-bold">Email:</span>
        <a
          href="mailto:Phanuwat_n@cmu.ac.th"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          Phanuwat_n@cmu.ac.th
        </a>
        <br />
        <span className="fw-bold">เบอร์โทร:</span>
        <span>062-3640176</span>
      </div>
      <p className="my-3 text-center">---</p>
    </Mainlayout>
  );
}
