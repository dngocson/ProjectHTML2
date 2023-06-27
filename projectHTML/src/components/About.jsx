import checkIcon from "../assets/checkicon.png";
import decor from "../assets/Union.png";
import guy from "../assets/guyPicture.png";
import paw from "../assets/paw.png";
import img2 from "../assets/about-img2.png";
import d1 from "../assets/about/decor1.png";
import d2 from "../assets/about/decor2.png";
import d3 from "../assets/about/decor3.png";
import d4 from "../assets/about/decor4.png";
import d5 from "../assets/about/decor5.png";
import d6 from "../assets/about/decor6.png";
import icon1 from "../assets/about/Icon1.png";
import icon2 from "../assets/about/Icon2.png";
import icon3 from "../assets/about/Icon3.png";
const About = () => {
  return (
    <div className="sectionContainer">
      <section className="about" id="about">
        <div className="about--inner">
          <section className="about__content">
            <p className="about__label">// About //</p>
            <h2 className="about__heading section__heading">
              Best Agency For Your Pet.
            </h2>
            <p className="section__desc about__desc ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="about__checklist">
              <div className="about__checklist-item">
                <div className="about__checklist-item-icon">
                  <img src={checkIcon} alt="checkicon" />
                </div>
                <span>Certified Groomer</span>
              </div>
              <div className="about__checklist-item">
                <div className="about__checklist-item-icon">
                  <img src={checkIcon} alt="checkicon" />
                </div>
                <span>Animal Lover</span>
              </div>
              <div className="about__checklist-item">
                <div className="about__checklist-item-icon">
                  <img src={checkIcon} alt="checkicon" />
                </div>
                <span>14+ Years Experience</span>
              </div>
              <div className="about__checklist-item">
                <div className="about__checklist-item-icon">
                  <img src={checkIcon} alt="checkicon" />
                </div>
                <span>Pet Parent Of 3 Dogs</span>
              </div>
            </div>
          </section>
          <div className="about__media">
            <img src={decor} alt="" className="about__media--decor" />
            <div className="about__media--imageWraper">
              <img className="about__media--picture" src={guy} alt="aguy" />
            </div>
            <div className="about__media__textContent">
              <img
                src={paw}
                alt=""
                className="about__media__textContent-decor"
              />
              <h2 className="about__media__textContent-title">20+</h2>
              <p className="about__media__textContent-text">Years Experience</p>
            </div>
          </div>
          <div className="about__media Trd">
            <div className="about__card">
              <img className="about__card-picture" src={img2} alt="aguy" />
              <img src={d1} alt="d1" className="about--decori1" />
              <img src={d2} alt="d2" className="about--decori2" />
              <img src={d3} alt="d3" className="about--decori3" />
              <img src={d4} alt="d4" className="about--decori4" />
              <img src={d5} alt="d5" className="about--decori5" />
              <img src={d6} alt="d6" className="about--decori6" />
              <img src={d6} alt="d6" className="about--decori7" />
              <img src={d6} alt="d6" className="about--decori8" />
            </div>
          </div>
          <section className="about__content">
            <h2 className="about__heading">
              Taking A Vacation? So Is Your Pet.
            </h2>
            <p className="about__desc section__desc">
              We offer long-term and short-term boarding. Every dog has its own
              private, spacious room and daily individual time in our large play
              yard.
            </p>
            <div className="about__features">
              <div className="about__features--item">
                <img
                  className="about__features--item-img"
                  src={icon1}
                  alt="icon1"
                />
                <h3 className="about__features--item-text">Pet Boarding</h3>
              </div>
              <div className="about__features--item">
                <img
                  className="about__features--item-img"
                  src={icon2}
                  alt="icon1"
                />
                <h3 className="about__features--item-text">Pet Daycare</h3>
              </div>
              <div className="about__features--item">
                <img
                  className="about__features--item-img"
                  src={icon3}
                  alt="icon1"
                />
                <h3 className="about__features--item-text">Pet Trasport</h3>
              </div>
            </div>
            <p className="about__content-text">
              While you're on holiday, here's where your furry friends will
              spend their time 1.
            </p>
            <a className="about__content__link">View More</a>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
