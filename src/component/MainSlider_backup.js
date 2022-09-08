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
    <>
      <Slider {...slideset} ref={slideRef}>
        {/** import Slider 이름과 맞춰준다 */}
        {SLIDE.map((slide, idx) => (
          <figure
            key={slide.slideid}
            className={`item item${slide.slideid} ${idx === Num ? "on" : ""}`}
          >
            <div className="slide_box">
              <h2>{slide.content}</h2>
              <p>{slide.des}</p>
              <a href={slide.link}>바로가기</a>
            </div>
          </figure>
        ))}
      </Slider>
      {/* {console.log(slideRef.current)} */}
      <div>
        0{Num + 1} / 0{SLIDE.length}
      </div>
      <ul className="arrows">
        <li>
          <a
            href=""
            onClick={(e) => {
              slideRef.current.slickPrev();
              e.preventDefault();
            }}
          >
            prev
          </a>
        </li>
        <li>
          <a
            href=""
            onClick={(e) => {
              slideRef.current.slickNext();
              e.preventDefault();
            }}
          >
            next
          </a>
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
      <div className="content">
        <div>{SLIDE[Num]?.des}</div>
      </div>
      {/* 옵셔널 체이닝 '?.' 이란?
옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.

등장배경
중첨 객체의 특정 프로퍼티에 접근하기 위해서 보통 AND연산자를 통해 실제 해당 객체 프로퍼티가 있는지 확인하여 사용 했었는데 AND 연산자를 사용하면 코드가 길어진다는 단점이 있어 보완하고자 등장하게 되었다.

?.은 ?. 앞의 평가 대상이 undefined 혹은 null이면 평가를 멈추고 undifined를 반환한다. 
옵셔널 체이닝을 남용하지 마세요.
?.는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.
?.앞의 변수는 꼭 선언되어 있어야 합니다.
obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함
https://ko.javascript.info/optional-chaining
*/}
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
