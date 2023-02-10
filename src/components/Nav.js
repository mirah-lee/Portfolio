import React from "react";
import "../asset/style/Nav.scss";


function Nav(props) {
  return (
    <nav>
      <ul>
        <li><a href="#work">WHAT I DO</a></li>
        <li><a href="#skill">SKILL</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
