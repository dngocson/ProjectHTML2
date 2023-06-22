import style from "./Contact.module.scss";
import logo from "../assets/Contact/Group 8.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const data = [
  {
    id: 1,
    title: "Explore",
    info: [
      { id: 1, content: "About" },
      { id: 2, content: "Service" },
      { id: 3, content: "Our Team" },
      { id: 4, content: "Adopt Pet" },
    ],
  },
  {
    id: 2,
    title: "Useful Links",
    info: [
      { id: 1, content: "FAQs" },
      { id: 2, content: "Shop" },
      { id: 3, content: "Privacy Policy" },
      { id: 4, content: "Terrms Of Use" },
      { id: 5, content: "Site Map" },
    ],
  },
  {
    id: 3,
    title: "Contact Info",
    info: [
      { id: 1, content: "dngocson12@gmail.com" },
      { id: 2, content: "+84942885082" },
      { id: 3, content: "Thu Duc, HCM city, VN" },
    ],
  },
  {
    id: 4,
    title: "Opening Time",
    info: [
      { id: 1, content: "Mon – Fri : 08.00 am – 20.00 pm" },
      { id: 2, content: "Saturday : 09.00 am – 20.00 pm" },
      { id: 3, content: "Sunday : We are Closed" },
    ],
  },
];
const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="contact_left">
          <div className="logo">
            <img src={logo} alt="logo" className="img" />
            <h3>Lucy</h3>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
          />
          <button>
            <BsFillArrowRightCircleFill />
          </button>
          <div className="icons">
            <h4>Follow Us</h4>
            <div className="icons_list">
              <BsFacebook />
              <BsTwitter />
              <AiFillLinkedin />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
        <div className="contact_right">
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h4>{item.title}</h4>
                {item.info.map((item) => (
                  <p key={item.id}>{item.content}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
