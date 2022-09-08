import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const SLIDE = [
  { slideid: 1, content: "슬라이드 제목1", des: "슬라이드내용1", link: "/1" },
  { slideid: 2, content: "슬라이드 제목2", des: "슬라이드내용2", link: "/2" },
  { slideid: 3, content: "슬라이드 제목3", des: "슬라이드내용3", link: "/3" },
];
const MainSlider = () => {
  const [Num, setNum] = useState(0);
  var slideset = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setNum(index),
  };
  return (
    <>
      <Slider {...slideset}>
        {/** import Slider 이름과 맞춰준다 */}
        {SLIDE.map((slide, idx) => (
          <figure key={slide.slideid} className={`item item${slide.slideid}`}>
            <div className="slide_box">
              <h2>{slide.content}</h2>
              <p>{slide.des}</p>
              <a href={slide.link}>바로가기</a>
            </div>
          </figure>
        ))}
      </Slider>
      <div>
        0{Num + 1} / 0{SLIDE.length}
      </div>
      <ul className="arrows">
        <li>
          <a href="">prev</a>
        </li>
        <li>
          <a href="">next</a>
        </li>
      </ul>
    </>
  );
};
export default MainSlider;

/**
 * 기본 Hooks
useState (동적 상태 관리)
useEffect (side effect 수행 -mount/unmount/update)
useContext (컴포넌트를 중첩하지 않고도 전역 값 쉽게 관리)
추가 Hooks
useReducer (복잡한 컴포넌트들의 state를 관리 -분리)
useCallback (특정 함수 재사용)
useMemo (연산한 값 재사용)
useRef (DOM선택, 컴포넌트 안에서 조회/수정할 수 있는 변수 관리)
useImperativeHandle
useLayoutEffect
useDebugValue
 * 
 * 
 */
