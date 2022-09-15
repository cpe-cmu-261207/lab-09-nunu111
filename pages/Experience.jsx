import React from "react";
import Mainlayout from "../layouts/Mainlayout";

export default function Experience() {
  return (
    <Mainlayout>
      <br />
      <div className="text-center">
        <p className="fw-bold h2">ผลงานทำเกมใน scratch</p>

        <iframe
          src="https://scratch.mit.edu/projects/563207805/embed"
          className="center_img"
          allowtransparency="true"
          width="600"
          height="500"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          rel="noreferrer"
        >
          <img src="img/S-project.png" />
        </iframe>
        <p className="fw-bold h2" style={{ color: "red" }}>
          โปรดระวังเสียงเกมดังมาก!
        </p>
        <small>
          ผลงานเมื่อปี 1 เทอม 1 ทำงานกัน 4 คนเป็นเกมแบบยิง slime
          ผ่านด่านไปเรื่อยๆจนกว่าจะจบด่านสุดท้าย ถ้าเอาไปเล่นฆ่าเวลาก็สนุกดีนะ
        </small>
        <br />
        <a
          href="https://scratch.mit.edu/projects/563207805"
          target="_blank"
          rel="noreferrer"
        >
          <p>หากเล่นเกมไม่ได้หรือภาพไม่ขึ้น</p>
        </a>
        <hr />
        <p className="fw-bold h2">ผลงานการจัดการโรงหนังขนาดเล็ก</p>
        <img src="img/cmd-project.png" alt="โรงหนัง" className="cmd_p" />
        <br />
        <small>
          ผลงานเมื่อปี 1 เทอม 2 ทำงานกัน 4 คนโดยสามารถเข้า github แล้วไปโหลด exe
          ไปใช้ได้เลย
        </small>
        <br />
        <a
          href="https://github.com/nunu111/jokemoo.git"
          target="_blank"
          rel="noreferrer"
        >
          กดเพื่อเข้าไปดูผลงาน
        </a>
      </div>
      <p className="my-3 text-center">---</p>
    </Mainlayout>
  );
}
