import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white m-5 rounded-5" style={{ fontSize: "30px" }}>
      <div className="nav-bar">
        <ul className="nav justify-content-center fw-bold">
          <ol>
            <Link href="/">
              <a>Home Page</a>
            </Link>
          </ol>
          <ol>
            <Link href="/Experience">
              <a target="_self">Experience </a>
            </Link>
          </ol>
          <ol>
            <Link href="/Contact">
              <a target="_self">Contact</a>
            </Link>
          </ol>
          <ol>
            <Link href="/lab-07">
              <a target="_self">Lab-07</a>
            </Link>
          </ol>
        </ul>
      </div>
    </div>
  );
}
