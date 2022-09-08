import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

const SLIDE = [
  { slideid: 1, content: "슬라이드 제목1", des: "슬라이드내용1", link: "/1" },
  { slideid: 2, content: "슬라이드 제목2", des: "슬라이드내용2", link: "/2" },
  { slideid: 3, content: "슬라이드 제목3", des: "슬라이드내용3", link: "/3" },
];
const MainSlider = () => {
  const [Num, setNum] = useState();
  const slideRef = useRef();
  useEffect(() => {
    setNum(0);
  }, []);
  /*useState(0)을 주게 되면 on 이 붙어서 나오므로 transition 효과가
    들어가지 않게 된다 따라서 렌더링이 다된 후에 useEffect를 이용하여 usestate 실행하기 
    위해서 사용, 뒤에 [deps] 부분을 생략하게 되면 랜더링 될때마다 실행하므로
    1번만 실행하기 위해서 [deps] 사용, 
    또한 props나 state가 변경되었을때마다 해당 부분을 변경하고 싶다면
    [deps]안에 [Num]을 적으면 된다.
  */
  var slideset = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    afterChange: (index) => setNum(index),
  };
  return (
    <section className="MainVisual">
      <Slider {...slideset} ref={slideRef} className="main_slider">
        {/** import Slider 이름과 맞춰준다 */}
        {SLIDE.map((slide, idx) => (
          <figure
            key={slide.slideid}
            className={`item item0${slide.slideid} ${idx === Num ? "on" : ""}`}
          >
            <div className="inner">
              <h2>{slide.content}</h2>
              <p>{slide.des}</p>
              <a href={slide.link}>바로가기</a>
            </div>
          </figure>
        ))}
      </Slider>
      {/* {console.log(slideRef.current)} */}
      <div className="num">
        0{Num + 1} / 0{SLIDE.length}
      </div>
      <ul className="arrows">
        <li
          onClick={() => {
            slideRef.current.slickPrev();
          }}
        >
          prev
        </li>
        <li
          onClick={() => {
            slideRef.current.slickNext();
          }}
        >
          next
        </li>
      </ul>
      <ul className="dots">
        {SLIDE.map((dots, idx) => (
          <li
            key={dots.slideid}
            className={idx === Num ? "on" : ""}
            onClick={(e) => slideRef.current.slickGoTo(idx)}
          >
            {dots.slideid}
          </li>
        ))}
      </ul>
      {/* <div className="content">
        <div>{SLIDE[Num]?.des}</div>
      </div> */}
    </section>
  );
};
export default MainSlider;
