import { Link } from "react-router-dom";
import whiteArrowIcon from "../images/arrow-white.svg";
import blackArrowIcon from "../images/arrow-black.svg";
import responsiveImage from "../images/responsive.svg";
import noLimitImage from "../images/no-limit.svg";
import embedImage from "../images/embed.svg";

function Home() {
  return (
    <>
      <article className="article">
        <div className="content first">
          <h1 className="title">
            Create and
            <br /> share your
            <br /> photo Stories.
          </h1>
          <p className="text">
            Photosnap is a platform for photographers and visual
            <br /> storytellers. We make it easy to share photos, tell
            <br /> stories and connect with others.
          </p>
          <Link className="arrow-btn" to="/Photosnap/">
            <h3 className="arrow-text">Get An Invite</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </Link>
        </div>
        <div className="image"></div>
      </article>

      <article className="article second">
        <div className="content">
          <h1 className="title">
            Beautiful
            <br /> stories
            <br /> every time
          </h1>
          <p className="text">
            We provide design templates to ensure your stories look
            <br /> terrific. Easily add photos, text, embed maps and media
            <br /> from other networks. Then share your story with everyone.
          </p>
          <Link className="arrow-btn" to="/Photosnap/">
            <h3 className="arrow-text">View the stories</h3>
            <img src={blackArrowIcon} alt="arrow-icon" className="arrow" />
          </Link>
        </div>

        <div className="image second"></div>
      </article>

      <article className="article">
        <div className="content">
          <h1 className="title">
            Designed for
            <br /> everyone
          </h1>
          <p className="text">
            Photosnap can help you create stories that resonate with
            <br /> your audience. Our tool is designed for photographers of
            <br /> all levels, brands, businesses you name it.
          </p>
          <Link className="arrow-btn" to="/Photosnap/">
            <h3 className="arrow-text">View the stories</h3>
            <img src={blackArrowIcon} alt="arrow-icon" className="arrow" />
          </Link>
        </div>
        <div className="image third"></div>
      </article>

      <section className="container">
        <Link className="card first">
          <h3 className="name">The Mountains</h3>
          <h4 className="author">by John Appleseed</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card second">
          <h3 className="name">Sunset Cityscapes</h3>
          <h4 className="author">by Benjamin Cruz</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card third">
          <h3 className="name">18 Days Voyage</h3>
          <h4 className="author">by Alexei Borodin</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card fourth">
          <h3 className="name">Architecturals</h3>
          <h4 className="author">by Samantha Brooke</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
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
      </section>
    </>
  );
}

export default Home;
