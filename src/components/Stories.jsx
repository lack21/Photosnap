import { Link } from "react-router-dom";
import whiteArrowIcon from "../images/arrow-white.svg";

function Stories() {
  return (
    <>
      <section className="hazy">
        <h3 className="top-text">Last month's featured story</h3>
        <h1 className="title">
          Hazy full
          <br /> moon of
          <br /> Appalachia
        </h1>
        <h3 className="bottom-text">March 2nd 2020 by John Appleseed</h3>
        <p className="sub-title">
          The dissected plateau area, while not actually made up
          <br /> of geological mountains, is popularly called "mountains,"
          <br /> especially in eastern Kentucky and West Virginia, and
          <br /> while the ridges are not high, the terrain is extremely
          <br /> rugged.
        </p>
        <Link className="arrow-btn" to="/Photosnap/">
          <h3 className="arrow-text">Get An Invite</h3>
          <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
        </Link>
      </section>

      <section className="container">
        <Link className="card first">
          <h4 className="data">April 16th 2020</h4>
          <h3 className="name">The Mountains</h3>
          <h4 className="author">by John Appleseed</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card second">
          <h4 className="data">April 14th 2020</h4>
          <h3 className="name">Sunset Cityscapes</h3>
          <h4 className="author">by Benjamin Cruz</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card third">
          <h4 className="data">April 11th 2020</h4>
          <h3 className="name">18 Days Voyage</h3>
          <h4 className="author">by Alexei Borodin</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card fourth">
          <h4 className="data">April 9th 2020</h4>
          <h3 className="name">Architecturals</h3>
          <h4 className="author">by Samantha Brooke</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>

        <Link className="card fifth">
          <h4 className="data">April 7th 2020</h4>
          <h3 className="name">World Tour 2019</h3>
          <h4 className="author">Timonthy Wagner</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card sixth">
          <h4 className="data">April 3rd 2020</h4>
          <h3 className="name">Unforeseen Corners</h3>
          <h4 className="author">William Malcolm</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card seventh">
          <h4 className="data">March 29th 2020</h4>
          <h3 className="name">King on Africa: Part ll</h3>
          <h4 className="author">Tim Hillenburg</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card eighth">
          <h4 className="data">March 21st 2020</h4>
          <h3 className="name">The Trip to Nowhere</h3>
          <h4 className="author">Felicia Rourke</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>

        <Link className="card nineth">
          <h4 className="data">March 19th 2020</h4>
          <h3 className="name">Rage of The Sea</h3>
          <h4 className="author">Mohammed Abdul</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card tenth">
          <h4 className="data">March 16th 2020</h4>
          <h3 className="name">Running Free</h3>
          <h4 className="author">Michelle</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card eleventh">
          <h4 className="data">March 11th 2020</h4>
          <h3 className="name">Behind the Waves</h3>
          <h4 className="author">Lamarr Wilson</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card twelfth">
          <h4 className="data">March 9th 2020</h4>
          <h3 className="name">Calm Waters</h3>
          <h4 className="author">Samantha Brooke</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>

        <Link className="card thirteenth">
          <h4 className="data">March 5th 2020</h4>
          <h3 className="name">The Milky Way</h3>
          <h4 className="author">Benjamin Cruz</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card fourteenth">
          <h4 className="data">March 4th 2020</h4>
          <h3 className="name">Night at The Dark Forest</h3>
          <h4 className="author">Mohammed Abdul</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card fifteenth">
          <h4 className="data">March 1st 2020</h4>
          <h3 className="name">Somwarpet's Beauty</h3>
          <h4 className="author">Michelle</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
        <Link className="card sixteenth">
          <h4 className="data">February 25th 2020</h4>
          <h3 className="name">Land of Dreams</h3>
          <h4 className="author">William Malcolm</h4>
          <a href="#" className="arrow-btn">
            <h3 className="arrow-text">Read Story</h3>
            <img src={whiteArrowIcon} alt="arrow-icon" className="arrow" />
          </a>
        </Link>
      </section>
    </>
  );
}

export default Stories;
