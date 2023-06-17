import cat from "../assets/cat.png";
import dog from "../assets/dog.png";
import decor1 from "../assets/icon2.svg";
import decor2 from "../assets/icon3.svg";
import subpic1 from "../assets/img01.png";
import subpic2 from "../assets/img02.png";
import { AiOutlineRightCircle } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="sectionContainer">
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__media">
              <div className="hero__img-wrap">
                <img src={cat} alt="" className="hero__img" />
                <img
                  src={decor1}
                  alt=""
                  className="hero__decor hero__decor-left"
                />
                <img
                  src={decor2}
                  alt=""
                  className="hero__decor hero__decor-right"
                />
              </div>
              <div className="hero__img-wrap hero__img-wrap-small">
                <img src={dog} alt="" className="hero__img" />
              </div>
              <div className="hero__list">
                <section className="hero-list-item">
                  <img src={subpic1} alt="" className="hero-list-item__thumb" />
                  <div className="hero-list-item__info">
                    <p className="hero-list-item__title">Pet Health</p>
                    <div className="hero-list-item__skeleton"></div>
                    <div className="hero-list-item__skeleton"></div>
                  </div>
                </section>
                <div className="hero-list-item__separate"></div>
                <section className="hero-list-item">
                  <img
                    style={{ backgroundColor: "#C6E2FA" }}
                    src={subpic2}
                    alt=""
                    className="hero-list-item__thumb"
                  />
                  <div className="hero-list-item__info">
                    <p className="hero-list-item__title">Pet care</p>
                    <div className="hero-list-item__skeleton"></div>
                    <div className="hero-list-item__skeleton"></div>
                  </div>
                </section>
              </div>
            </div>
            <section className="hero__content">
              <h1 className="hero__heading">
                Established & Trusted Pet Care Service
              </h1>
              <p className="hero__desc">
                Discover a wide variety of Pawsitive services to choose from,
                including daycare, private walks, office duty and spa.
              </p>
              <div className="hero__row">
                <a href="#!" className="btn btn--primary hero__cta-btn">
                  Book a Meet{" "}
                  <AiOutlineRightCircle className="hero__cta-btn-icon" />
                </a>
                <a href="#!" className="hero__cta-link">
                  Schedule a Call
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
