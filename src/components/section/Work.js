import "../../asset/style/Work.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import img1Path1 from "../../asset/images/tempcsimg1.png";
import img1Path2 from "../../asset/images/tempcsimg2.png";
import img1Path3 from "../../asset/images/tempcsimg3.png";
import img1Path4 from "../../asset/images/tempcsimg4.png";

function Work(props) {
  return (
    <section className="work" id="work">
      <div className="inner">
        <div className="textBox">
          <h2>
            WHAT
            <br />I DO
          </h2>
          <p>
            지금까지 작업했던 사이트 입니다. 여러명의 사람들과 함께하는
            프로젝트와 개인 프로젝트로 웹사이트를 제작했습니다.
            <br />
            앞으로도 더 새롭고 다양한 웹사이트를 제작하고 싶습니다.
          </p>
        </div>
        <div className="contentsBox">
          <div className="controlBox">
            <div className="cs-prev"></div>
            <div className="cs-next"></div>
          </div>
          <Swiper
            className="contentsSlide"
            modules={[Navigation, Autoplay]}
            spaceBetween={1}
            slidesPerView={"4"}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".cs-next",
              prevEl: ".cs-prev",
            }}
          >
            <SwiperSlide>
              <a href="#">
                <div className="imgBox">
                  <img src={img1Path1} alt="temp" />
                </div>
                <div className="hovBox">
                  <dl>
                    <dt>포트폴리오</dt>
                    <dd>포트폴리오 설명 페이지</dd>
                  </dl>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <div className="imgBox">
                  <img src={img1Path2} alt="temp" />
                </div>
                <div className="hovBox">
                  <dl>
                    <dt>테스트</dt>
                    <dd>테스트 내용</dd>
                  </dl>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <div className="imgBox">
                  <img src={img1Path3} alt="temp" />
                </div>
                <div className="hovBox">
                  <dl>
                    <dt>테스트</dt>
                    <dd>테스트 내용</dd>
                  </dl>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <div className="imgBox">
                  <img src={img1Path4} alt="temp" />
                </div>
                <div className="hovBox">
                  <dl>
                    <dt>팀 프로젝트</dt>
                    <dd>Play D</dd>
                  </dl>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work;
