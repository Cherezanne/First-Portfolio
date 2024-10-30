import React from "react";

function Header() {
  return (
    <>
      <div>
        <nav className="nav-header">
          <div className="nav-title">
            <p>Cherezanne Morgan</p>
          </div>
          <div>
            <ul className="nav-list">
              <li className="nav-link">
                <a href="#">Home</a>
              </li>
              <li className="nav-link">
                <a href="#">About</a>
              </li>{" "}
              <li className="nav-link">
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div className="nav-image-container">
            <a href="http://www.instagram.com">
              <img
                src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"
                alt="Instagram icon"
                width="25px"
                height="25px"
                className="nav-icon"
              />
            </a>
            <a href="www.linkedin.com/in/cherezanne-morgan">
              <img
                src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Linkedin-256.png"
                alt="linkedin icon"
                className="nav-icon"
              />
            </a>
            <a href="http://www.instagram.com">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-256.png"
                alt="github icon"
                width="25px"
                height="25px"
                className="nav-icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
 export default Header;
