//const DB1 = [{ name: "kim" }, { name: "mi_suuun" }, { name: "suuun" }];

import { useState } from "react";

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/",
    submenu: [
      {
        content: "submenu01",
        link: "/smenu1",
      },
      {
        content: "submenu02",
        link: "/smenu2",
      },
      {
        content: "submenu03",
        link: "/smenu3",
      },
    ],
  },
  {
    id: 2,
    content: "menu02",
    link: "/",
    submenu: [
      {
        content: "submenu21",
        link: "/smenu1",
      },
      {
        content: "submenu22",
        link: "/smenu2",
      },
      {
        content: "submenu23",
        link: "/smenu3",
      },
    ],
  },
  {
    id: 3,
    content: "menu03",
    link: "/",
    submenu: [
      {
        content: "submenu31",
        link: "/smenu1",
      },
      {
        content: "submenu32",
        link: "/smenu2",
      },
      {
        content: "submenu33",
        link: "/smenu3",
      },
    ],
  },
  {
    id: 4,
    content: "menu04",
    link: "/",
    submenu: [
      {
        content: "submenu41",
        link: "/smenu1",
      },
      {
        content: "submenu42",
        link: "/smenu2",
      },
      {
        content: "submenu43",
        link: "/smenu3",
      },
    ],
  },
];

function App() {
  const [CB, setCB] = useState("");

  return (
    <>
      <h1 className={CB ? "on" : ""} onClick={() => setCB("ON")}>
        LOGO
      </h1>
      <nav className="GNB">
        {/* <h1>{DB[0].name}</h1> */}
        {/* {DB[0].name}
        {DB[1].name}
        {DB[2].name} */}
        {/* <ul>
          {DB1.map((el, idx) => (
            <li key={idx}>{el.name}</li>
          ))}
        </ul> */}
        <ul>
          {DB.map((el, idx) => (
            <li key={idx}>
              <a href={el.link}>{el.content}</a>
              <ul className="submenu">
                {el.submenu.map((submenu, idx) => (
                  <li key={idx}>
                    <a href={submenu.link}>{submenu.content}</a>
                  </li>
                ))}
                {/* <li>
                  <a href="">{el.sunmenu[0].content}</a>
                </li> */}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default App;
