import React from "react";

function Project(props) {
  return (
    <>
      <section className="project">
        <div className="inner">
          <div className="projectBg">
            <h1 className="title"></h1>
            <h2 className="subTitle"></h2>
            <p className="tag"></p>
          </div>
        </div>
      </section>
      <section className="overview">
        <div className="inner">
          <h2 className="overviewTitle"></h2>
          <h3 className="overviewSubTitle">
            kt그룹 디지털마케팅 대행사 플레이디는 고객 성장에 필요한 모든 마케팅
            서비스를 제공합니다.
          </h3>
          <p className="des">
            자바스크립트를 활용해 PLAY D 웹 사이트의 기능을 구현하는 프로젝트로
            메인페이지 제작 및 기능 구현을 맡아 작업했습니다.
          </p>
          <ul>
            <li>
              <strong>프로젝트</strong>
              <p>PLAY D</p>
            </li>
            <li>
              <strong>타입</strong>
              <p>Web</p>
            </li>
            <li>
              <strong>기여도</strong>
              <p>팀 프로젝트 100%</p>
            </li>
            <li>
              <strong>작업기간</strong>
              <p>2022.12.19~2022.12.26</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="showGif">
        <div className="inner">
          <h2>웹 사이트 이미지</h2>
          <div className="imgBoxWrap">
            <div className="imgBox">
              <img src="#" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="inner">
            <div className="infoKeywords">
                <h2 className="infoTitle"></h2>
                <ul>
                    <li>Javascript</li>
                    <li>웹 표준</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className="infoDesign">
                <h2 className="infoTitle"></h2>
                <div className="infoBox">
                    <div className="infoColor">
                        <img src="" alt="" />
                    </div>
                    <div className="infoFont">
                        <h3>NotoSans</h3>
                        <ul className="infoFontStyle">
                            <li>가나다라마바사아자차카타파하</li>
                            <li>ABCDEFGHIJKLNMOPQRSTUVWXYZ</li>
                            <li>abcdefghijklnmopqrstuvwxyz</li>
                            <li>0123456789</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="infoPublishing">
                <h2 className="infoTitle"></h2>
                <ul>
                    <li>Chrome 브라우저 최적화</li>
                    <li>PC : 1920px</li>
                    <li>Math.random을 활용해 첫 화면  이미지 랜덤, 랜덤 색상 구현</li>
                    <li>이벤트 스크롤을 이용해 일정 스크롤을 내렸을 때, 컨텐츠 요소 날아오는 기능</li>
                    <li>Swiper 라이브러리로 브랜드 배너 자동으로 흐르는 기능</li>
                </ul>
            </div>
            <div className="infoReview">
                <h2 className="infoTitle"></h2>
                <ul>
                    <li></li>
                </ul>
            </div>

        </div>
      </section>
    </>
  );
}

export default Project;
