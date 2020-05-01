import React, { Component } from "react";
import "./Menu.css"

// MENU COMPONENT CODE GOES HERE

function Menu({handleSubjectClick, currSubject}) {
  // console.log(subjectClickStatus.localNews.clicked);
  return (
    <div className="menu-container">
      <ul className={"menu"}>
        <li 
          className="menu__item">
          <button
            className={(currSubject === "localNews" ? "highlighted" : "")}
            onClick={() => handleSubjectClick("localNews")}
          >
            Local News
        </button>
        </li>
        <li 
        className="menu__item">
          <button
            className={(currSubject === "technology" ? "highlighted" : "")}

            onClick={() => handleSubjectClick("technology")}
          >
            technology
        </button>
        </li>
        <li 
        className="menu__item">
          <button
            className={(currSubject === "entertainment" ? "highlighted" : "")}
            onClick={() => handleSubjectClick("entertainment")}
          >
            entertainment

        </button>
        </li>
        <li 
        className="menu__item">
          <button
            className={(currSubject === "science" ? "highlighted" : "")}
            onClick={() => handleSubjectClick("science")}
          >
            science

        </button>
        </li>
        <li 
        className="menu__item">
          <button
            className={(currSubject === "health" ? "highlighted" : "")}
            onClick={() => handleSubjectClick("health")}
          >
            health
        </button>
        </li>
      </ul>
    </div>
  )
}

export default Menu;