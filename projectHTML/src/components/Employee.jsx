import style from "./Employee.module.scss";
import E1 from "../assets/Employee2/E1.png";
import E2 from "../assets/Employee2/E2.png";
import E3 from "../assets/Employee2/E3.png";
import E4 from "../assets/Employee2/E4.png";
// import D1 from "../assets/Employee2/decor1.png";
// import D2 from "../assets/Employee2/decor2.png";
// import D3 from "../assets/Employee2/deocor3.png";
// import D4 from "../assets/Employee2/decor4.png";
const Employee = () => {
  return (
    <section className={style.container}>
      <div className={style.employee}>
        <p className={style.employee_desc}>Pet care staff</p>
        <h3 className={style.employee_heading}>Meet Our Groomers</h3>
        <div className={style.cards}>
          <div className={style.card}>
            <figure
              className={`${style.card_wraper} ${style.card_wraper_first}`}
            >
              <img className={style.card_img} src={E1} alt="Employee1" />
            </figure>
            <p className={style.card_title}>Pet Trainer</p>
            <p className={style.card_name}>Meghan Samit</p>
          </div>
          <div className={style.card}>
            <figure
              className={`${style.card_wraper} ${style.card_wraper_second}`}
            >
              <img className={style.card_img} src={E2} alt="Employee2" />
            </figure>
            <p className={style.card_title}>Veterinarian</p>
            <p className={style.card_name}>Alissa Silva</p>
          </div>
          <div className={style.card}>
            <figure
              className={`${style.card_wraper} ${style.card_wraper_third}`}
            >
              <img className={style.card_img} src={E3} alt="Employee3" />
            </figure>
            <p className={style.card_title}>Veterinarian</p>
            <p className={style.card_name}>Cindy Harris</p>
          </div>
          <div className={style.card}>
            <figure
              className={`${style.card_wraper} ${style.card_wraper_fourth}`}
            >
              <img className={style.card_img} src={E4} alt="Employee4" />
            </figure>
            <p className={style.card_title}>Animal Caretaker</p>
            <p className={style.card_name}>Lucas Tony</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employee;
