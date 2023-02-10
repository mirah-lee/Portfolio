import React from "react";
import "../../asset/style/Intro.scss";

function Intro(props) {
  return (
    <section className="intro" id='intro'>
      <div className="inner">
        <h2>
          프론트엔드 개발자 <strong>이하림</strong> 입니다.
        </h2>
        <div className="scroll">
          Scroll Down
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
