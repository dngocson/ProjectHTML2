import style from "./Comment.module.scss";
import img1 from "../assets/Comment/img1.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const Comment = () => {
  return (
    <section className={style.comment}>
      <div className={style.content}>
        <div className={style.comment_container}>
          <div className={style.comment_imgWraper}>
            <img
              className={style.comment_img}
              src={img1}
              alt="a girl with a dog"
            />
          </div>
          <div className={style.comment_content}>
            <h3 className={style.comment_title}>Our Reviews</h3>
            <p className={style.comment_comment}>
              “It was very comforting to recieve a text and pics each day about
              our pets and how they were doing. It was also nice that my pets
              were in the comfortable environment of their own home and received
              playfull attention from our pet sitters as well. Thanks so much!”
            </p>
            <p className={style.comment_author}>Karla Deras</p>
          </div>
          <a href="#!" className={style.comment_arrow_left}>
            <AiOutlineArrowLeft />
          </a>
          <a href="#!" className={style.comment_arrow_right}>
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      <div className={style.comment_dots}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    </section>
  );
};

export default Comment;
