import { Outlet, Link } from "react-router-dom";
import logoImage from "../images/logo.svg";
import lightLogoImage from "../images/logo-white.svg";
import facebookIcon from "../images/facebook.svg";
import youtubeIcon from "../images/youtube.svg";
import twitterIcon from "../images/twitter.svg";
import pinterestIcon from "../images/pinterest.svg";
import instagramIcon from "../images/instagram.svg";
import whiteArrowIcon from "../images/arrow-white.svg";
import closeIcon from "../images/icon-close.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import { useState } from "react";

function Layout() {
  const [isLinksActive, setIsLinksActive] = useState(false);

  function ToggleLinksBtn() {
    setIsLinksActive(!isLinksActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Photosnap/">
          <img src={logoImage} alt="logo" className="logo" />
        </Link>

        <div className={`links ${isLinksActive ? "active" : ""}`}>
          <Link className="link" to="/Photosnap/stories">
            Stories
          </Link>
          <Link className="link" to="/Photosnap/features">
            Features
          </Link>
          <Link className="link" to="/Photosnap/pricing">
            Pricing
          </Link>
          <Link className="link btn" to="/Photosnap/">
            Get An Invite
          </Link>
        </div>

        <img
          src={isLinksActive ? closeIcon : hamburgerIcon}
          alt="links-btn"
          className="links-btn"
          onClick={ToggleLinksBtn}
        />
      </nav>

      <Outlet />

      <footer className="footer">
        <div className="left-side">
          <Link to="/Photosnap/">
            <img src={lightLogoImage} alt="logo" className="logo" />
          </Link>

          <div className="social-icons">
            <img src={facebookIcon} alt="facebook-icon" />
            <img src={youtubeIcon} alt="youtube-icon" />
            <img src={twitterIcon} alt="twitter-icon" />
            <img src={pinterestIcon} alt="pinterest-icon" />
            <img src={instagramIcon} alt="instagram-icon" />
          </div>
        </div>

        <div className="center-side">
          <Link className="link" to="/Photosnap/">
            Home
          </Link>
          <Link className="link" to="/Photosnap/stories">
            Stories
          </Link>
          <Link className="link" to="/Photosnap/features">
            Features
          </Link>
          <Link className="link" to="/Photosnap/pricing">
            Pricing
          </Link>
        </div>

        <div className="right-side">
          <Link className="arrow-btn" to="/Photosnap/">
            <h3 className="arrow-text">Get An Invite</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </Link>
          <p className="copyright">Copyright 2023. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
