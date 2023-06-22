import style from "./Contact.module.scss";
import logo from "../assets/Contact/Group 8.png";
import { AiOutlineArrowRight } from "react-icons/ai";
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
  const onsubmitHandler = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <section className={style.contact}>
      <div className={style.container}>
        <div className={style.contact_left}>
          <div className={style.contact_left_content}>
            <div className={style.contact_logo}>
              <img src={logo} alt="logo" className={style.contact_logo_img} />
              <h3 className={style.contact_logo_title}>Lucy</h3>
            </div>
            <form onSubmit={onsubmitHandler} className={style.contact_form}>
              <input
                type="email"
                placeholder="Enter your email"
                className={style.contact_input}
              />
              <button type="submit" className={style.contact_button}>
                <AiOutlineArrowRight size={24} color="white" />
              </button>
            </form>
            <div className={style.contact_icons}>
              <h4 className={style.contact_icons_title}>Follow Us</h4>
              <div className={style.contact_icons_list}>
                <div className={style.contact_icons_icon}>
                  <BsFacebook color="#000958" size={17} />
                </div>
                <div className={style.contact_icons_icon}>
                  <BsTwitter color="#000958" size={17} />
                </div>
                <div className={style.contact_icons_icon}>
                  <AiFillLinkedin color="#000958" size={17} />
                </div>
                <div className={style.contact_icons_icon}>
                  <AiOutlineInstagram color="#000958" size={17} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.contact_right}>
          <ul className={style.contact_right_container}>
            {data.map((item) => (
              <li className={style.contact_right_list} key={item.id}>
                <h4 className={style.contact_right_list_title}>{item.title}</h4>
                {item.info.map((item) => (
                  <p className={style.contact_right_list_desc} key={item.id}>
                    {item.content}
                  </p>
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
