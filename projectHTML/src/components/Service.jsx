import style from "./Service.module.scss";
import dog from "../assets/service/dog.png";
import arrowRight from "../assets/service/ArrowUpRight.png";
const Service = () => {
  const serviceList = [
    {
      id: 1,
      heading: "Puppy Sitting",
      content:
        "Helping your new pup to be a good boy or girl isn’t always easy, but we’re here to help.",
    },
    {
      id: 2,
      heading: "Dog Walking",
      content:
        "Choose from a 30, 45, or 60-minute visit to give your pet their daily dose of fun-filled.",
    },
    {
      id: 3,
      heading: "Pet Sitting",
      content:
        "While you’re away we can make sure your pet has all the food, water, exercise, and, of course.",
    },
    {
      id: 4,
      heading: "Overnight Care",
      content:
        "If you’re away for the night, we can stay the night or stop by in the evening and morning.",
    },
    {
      id: 5,
      heading: "Pet Taxi",
      content:
        "Does your pet need a lift to the groomers, vet, or dog park? We’ve got their tail covered.",
    },
    {
      id: 6,
      heading: "Pet Medical",
      content:
        "Our team of experienced professionals can help with everything from pills to injections.",
    },
  ];

  return (
    <section className={style.service}>
      <div className={style.container}>
        <section className={style.service__top}>
          <p className={style.service__desc}>What we do for you?</p>
          <h2 className={style.service__heading}>Our Services</h2>
        </section>
        <div className={style.service__imgHolder}>
          <figure>
            <img className={style.service__mainImg} src={dog} alt="" />
          </figure>
          <a href="#!" className={style.service_link}>
            View all services
          </a>
        </div>

        {serviceList.map((item) => (
          <ServiceItem key={item.id} title={item.heading} desc={item.content} />
        ))}
      </div>
    </section>
  );
};

export default Service;
const ServiceItem = ({ title, desc }) => {
  return (
    <div className="style">
      <article className={style.service__card}>
        <div className={style.service__card_holder}>
          <h3 className={style.service__card_title}>{title}</h3>
          <p className={style.service__card_desc}>{desc}</p>
          <a href="#!" className={style.service__card_link}>
            Read more{" "}
            <img src={arrowRight} className={style.service__card_img}></img>
          </a>
        </div>
      </article>
    </div>
  );
};
