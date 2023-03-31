import { useState } from "react";
import { Link } from "react-router-dom";
import whiteArrowIcon from "../images/arrow-white.svg";
import checkImage from "../images/check.svg";

function Pricing() {
  const [isMonthActive, setIsMonthActive] = useState(true);

  function ToggleActiveMonth() {
    setIsMonthActive(!isMonthActive);
  }

  return (
    <>
      <section className="sub-header">
        <div className="content">
          <h1 className="title">Pricing</h1>
          <p className="sub-title">
            Create a your stories, Photosnap is a platform for
            <br /> photographers and visual storytellers. It's the simple way
            <br /> to create and share your photos.
          </p>
        </div>
        <div className="image second"></div>
      </section>

      <section className="bill-switcher">
        <h3 className={`text ${isMonthActive ? "active" : ""}`}>Monthly</h3>
        <div
          className={`switch-btn ${isMonthActive ? "" : "active"}`}
          onClick={ToggleActiveMonth}
        >
          <div className="circle"></div>
        </div>
        <h3 className={`text ${isMonthActive ? "" : "active"}`}>Yearly</h3>
      </section>

      <section className="plans">
        <div className="plan">
          <h2 className="heading">Basic</h2>
          <p className="text">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <h3 className="price">${isMonthActive ? "19.00" : "190.00"}</h3>
          <h4 className="period">per {isMonthActive ? "month" : "year"}</h4>
          <Link className="btn" to="/Photosnap/">
            Pick Plan
          </Link>
        </div>
        <div className="plan center">
          <h2 className="heading">Pro</h2>
          <p className="text">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <h3 className="price">${isMonthActive ? "39.00" : "390.00"}</h3>
          <h4 className="period">per {isMonthActive ? "month" : "year"}</h4>
          <Link className="btn" to="/Photosnap/">
            Pick Plan
          </Link>
        </div>
        <div className="plan">
          <h2 className="heading">Business</h2>
          <p className="text">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <h3 className="price">${isMonthActive ? "99.00" : "990.00"}</h3>
          <h4 className="period">per {isMonthActive ? "month" : "year"}</h4>
          <Link className="btn" to="/Photosnap/">
            Pick Plan
          </Link>
        </div>
      </section>

      <section className="compare">
        <h2 className="heading">COMPARE</h2>

        <div className="item top">
          <h3 className="name">The Features</h3>
          <h3 className="top-text">BASIC</h3>
          <h3 className="top-text">PRO</h3>
          <h3 className="top-text">BUSINESS</h3>
        </div>
        <div className="item">
          <h3 className="name">Unlimited Story Posting</h3>
          <img src={checkImage} alt="check-image" className="check-image" />
          <img src={checkImage} alt="check-image" className="check-image" />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
        <div className="item">
          <h3 className="name">Unlimited Photo Upload</h3>
          <img src={checkImage} alt="check-image" className="check-image" />
          <img src={checkImage} alt="check-image" className="check-image" />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
        <div className="item">
          <h3 className="name">Embedding Custom Content</h3>
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img src={checkImage} alt="check-image" className="check-image" />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
        <div className="item">
          <h3 className="name">Customize Metadata</h3>
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img src={checkImage} alt="check-image" className="check-image" />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
        <div className="item">
          <h3 className="name">Advanced Metrics</h3>
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
        <div className="item">
          <h3 className="name">Photo Downloads</h3>
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
        <div className="item">
          <h3 className="name">Search Engine Indexing</h3>
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
        <div className="item">
          <h3 className="name">Custom Analytics</h3>
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img
            src={checkImage}
            alt="check-image"
            className="check-image hidden"
          />
          <img src={checkImage} alt="check-image" className="check-image" />
        </div>
      </section>

      <section className="beta">
        <h2 className="heading">
          We're in Beta.
          <br /> Get your invite
          <br /> today!
        </h2>
        <Link className="arrow-btn" to="/Photosnap/">
          <h3 className="arrow-text">Get An Invite</h3>
          <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
        </Link>
      </section>
    </>
  );
}

export default Pricing;
