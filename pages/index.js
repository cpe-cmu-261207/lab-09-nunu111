import React from "react";
import Mainlayout from "../layouts/Mainlayout";

export default function Home() {
  return (
    <Mainlayout>
      <div className=" mx-auto p_pro">
        <br />
        <img
          src="/img/nu.jpg"
          className="profile rounded border border-dark border-4 center_img"
        />
        <br />
        <p className="fw-bold text-center n-text">ภาณุวัฒน์ เงินท๊อก (นุ)</p>
        <p className="detile text-center">
          สวัสดีครับผม ภาณุวัฒน์ เงินท๊อก เรียนอยู่ที่มหาวิทยาลัยเชียงใหม่
        </p>
        <p className="detile text-center">
          คณะวิศวดรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ผมสนใจในการทำเกมเป็นหลัก
        </p>
      </div>

      <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="img/640px-ISO_C++_Logo.svg.png"
              className="img-fluid rounded-start"
              alt="C++"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">ภาษาที่เขียนได้</h5>
              <p className="card-text">
                ภาษาที่เขียนได้ดีสุดตอนนี้ก็คือภาษา C++ ตอนนี้กำลังศึกษาภาษา
                javascript
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="img/Nao.png"
              className="img-fluid rounded-start"
              alt="Nao"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">งานอดิเรก</h5>
              <p className="card-text">
                ปกติจะวาดรูปเล่นๆเพราะมันสนุกดี
                ถึงแม้ว่าผลงานมันจะไม่ได้ดูดีมากแต่ก็เป็นความชอบส่วนตัว
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="img/osu.png"
              className="img-fluid rounded-start"
              alt="Nao"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">ความสามารถพิเศษ</h5>
              <p className="card-text">
                ผมเล่นเกมเก่งมากครับ555
                ถึงแม้ว่าจะไม่ได้เก่งเวอร์วังอะไรขนาดนั้นแต่ส่วนตัวว่าเก่งอยู่นะ
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="my-3 text-center">---</p>
    </Mainlayout>
  );
}
