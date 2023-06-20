import style from "./Pricing.module.scss";
import saleoff from "../assets/pricing/Vector 13.png";
import { AiOutlineCheck } from "react-icons/ai";
const Pricing = () => {
  return (
    <section className={style.pricing}>
      <div className={style.pricing__container}>
        <h2 className={style.pricing__heading}>The Best Choice</h2>
        <p className={style.pricing__desc}>
          We offer long-term and short-term boarding. Every dog has its own
          private, spacious room and daily individual time in our large play
          yard.
        </p>
        <div className={style.pricing__switch_swap}>
          <div className={style.pricing__switch_inner}>
            <div className={style.pricing__switch}>
              <input
                type="checkbox"
                name=""
                id="pricing-switch"
                className={style.pricing__switch_input}
                hidden
              />
              <label
                htmlFor="pricing-switch"
                className={style.pricing__switch_label}
              >
                <span className={style.pricing__switch_value}>Monthly</span>
                <span className={style.pricing__switch_value}>Yearly</span>
              </label>
            </div>
            <img src={saleoff} alt="" className={style.pricing__sale_off} />
          </div>
        </div>
        <div>
          <ul className={style.cardContainer}>
            {CardData.map((card) => (
              <PricingCard
                key={card.id}
                type={card.type}
                daycare={card.daycare}
                price={card.price}
                service={card.service}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const CardData = [
  {
    id: 1,
    type: "Basic",
    daycare: "Day care",
    price: "$150",
    service: [
      { id: 1, name: "Single room", avaiable: true },
      { id: 2, name: "Socialist Exercise", avaiable: true },
      { id: 3, name: "Custom Meals", avaiable: true },
      { id: 4, name: "Spa and Grooming", avaiable: true },
      { id: 5, name: "Exercise 2x", avaiable: false },
      { id: 6, name: "Custom Meals", avaiable: false },
      { id: 7, name: "Grooming 2x", avaiable: false },
    ],
  },
  {
    id: 2,
    type: "Exclusive",
    daycare: "2X Care",
    price: "$199",
    service: [
      { id: 1, name: "Single room", avaiable: true },
      { id: 2, name: "Socialist Exercise", avaiable: true },
      { id: 3, name: "Custom Meals", avaiable: true },
      { id: 4, name: "Spa and Grooming", avaiable: true },
      { id: 5, name: "Exercise 2x", avaiable: true },
      { id: 6, name: "Custom Meals", avaiable: false },
      { id: 7, name: "Grooming 2x", avaiable: false },
    ],
  },
  {
    id: 3,
    type: "Platinum",
    daycare: "4X Care",
    price: "$299",
    service: [
      { id: 1, name: "Single room", avaiable: true },
      { id: 2, name: "Socialist Exercise", avaiable: true },
      { id: 3, name: "Custom Meals", avaiable: true },
      { id: 4, name: "Spa and Grooming", avaiable: true },
      { id: 5, name: "Exercise 2x", avaiable: true },
      { id: 6, name: "Custom Meals", avaiable: true },
      { id: 7, name: "Grooming 2x", avaiable: true },
    ],
  },
];

export const PricingCard = ({ type, daycare, price, service }) => {
  return (
    <li>
      <div className={style.card}>
        <p className={style.card_type}>{type}</p>
        <p className={style.card_daycare}>{daycare}</p>
        <p className={style.card_price}>{price}</p>
        <a className={style.card_link}>Purchase Now</a>
        {service.map((item) => (
          <div className={style.card_feature} key={item.id}>
            <AiOutlineCheck
              color={item.avaiable ? "#FF5B2E" : "rgba(255, 91, 46, 0.4)"}
              size={18}
            />
            <p className={style.card_feature_name}>{item.name}</p>
          </div>
        ))}
      </div>
    </li>
  );
};
