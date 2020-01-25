import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import logo from "../assets/img/logo.jpg"
import "../assets/css/main.scss"

export default () => (
  <>
    <nav>
      <ul id="">
        <li data-menuanchor="story">
          <a href="#story">Story</a>
        </li>
        <li data-menuanchor="releases">
          <a href="#releases">Releases</a>
        </li>
        <li data-menuanchor="tour">
          <a href="#tour">Tour</a>
        </li>
        <li data-menuanchor="gallery">
          <a href="#gallery">Gallery</a>
        </li>
        <li data-menuanchor="shop">
          <a href="#shop">Shop</a>
        </li>
        <li data-menuanchor="contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <ReactFullpage
      licenseKey="211600E0-74934D25-BC897849-E83013EC"
      anchors={["firstPage", "secondPage"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div id="story" className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
							<img width={100} src={logo} />
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div id="releases" className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  </>
)
