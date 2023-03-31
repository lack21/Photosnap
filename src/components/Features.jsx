import { Link } from "react-router-dom";
import whiteArrowIcon from "../images/arrow-white.svg";
import responsiveImage from "../images/responsive.svg";
import noLimitImage from "../images/no-limit.svg";
import embedImage from "../images/embed.svg";
import customImage from "../images/custom.svg";
import boostImage from "../images/boost.svg";
import dragImage from "../images/drag.svg";

function Features() {
  return (
    <>
      <section className="sub-header">
        <div className="content">
          <h1 className="title">Features</h1>
          <p className="sub-title">
            We make sure all of our features are designed to be loved
            <br /> by every aspiring and even professional photograpers who
            <br /> wanted to share their stories.
          </p>
        </div>
        <div className="image"></div>
      </section>

      <section className="offers">
        <div className="offer">
          <img src={responsiveImage} alt="responsive-image" />
          <h3 className="name">100% Responsive</h3>
          <p className="text">
            No matter which the device you're on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className="offer">
          <img src={noLimitImage} alt="no-limit-image" />
          <h3 className="name">No Photo Upload Limit</h3>
          <p className="text">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="offer">
          <img src={embedImage} alt="embed-image" />
          <h3 className="name">Available to Embed</h3>
          <p className="text">
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
        <div className="offer">
          <img src={customImage} alt="embed-image" />
          <h3 className="name">Custom Domain</h3>
          <p className="text">
            With Photosnap subscriptions you can host your stories on your own
            domain. You can also remove our branding!
          </p>
        </div>
        <div className="offer">
          <img src={boostImage} alt="embed-image" />
          <h3 className="name">Boost Your Exposure</h3>
          <p className="text">
            Users that viewed your story or gallery can easily get notifed of
            new and featured stories with our built in mailing list.
          </p>
        </div>
        <div className="offer">
          <img src={dragImage} alt="embed-image" />
          <h3 className="name">Drag & Drop Image</h3>
          <p className="text">
            Easily drag and drop your image and get beautiful shots everytime.
            No over the top tooling to add friction to creating stories.
          </p>
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

export default Features;
