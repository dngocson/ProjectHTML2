import style from "./Blog.module.scss";
import img1 from "../assets/Blog/img1.png";
import img2 from "../assets/Blog/img2.png";
import img3 from "../assets/Blog/img3.png";
const cardData = [
  {
    id: 1,
    date: "21 june 2021",
    title: "Building Bonds and Trusting Relationships with Your Pets.",
    img: img1,
    desc: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: 2,
    date: "28 june 2021",
    title: "Celebrity pet photographer Grace Chon on taking ...",
    img: img2,
    desc: "Doting pet parents have a relentless need to constantly photograph every adorable pet moment...",
  },
  {
    id: 3,
    date: "10 july 2021",
    title: "5 Simple Tricks To Create A More Conscious ...",
    img: img3,
    desc: "It is easy to forget that animals are living creatures with a beating heart.",
  },
];
const Blog = () => {
  return (
    <section className={style.blog} id="blog">
      <div className={style.blog_header}>
        <h3 className={style.blog_title}>Our Blog</h3>
        <div className={style.blog_desc_link}>
          <p className={style.blog_desc}>
            Stay up to date with the latest tech trands and news in the pets.
          </p>
          <a href="#!" className={style.blog_link}>
            View All Blog
          </a>
        </div>
      </div>
      <ul className={style.cards}>
        {cardData.map((card) => (
          <BlogCard
            key={card.id}
            date={card.date}
            title={card.title}
            img={card.img}
            desc={card.desc}
          />
        ))}
      </ul>
      <a href="#!" className={style.blog_link_responsive}>
        View All Blog
      </a>
    </section>
  );
};

export default Blog;

const BlogCard = ({ date, title, img, desc }) => {
  return (
    <li className={style.card}>
      <div className={style.card_imgHolder}>
        <p className={style.card_date}>{date}</p>
        <img className={style.card_img} src={img} alt="card" />
      </div>
      <div className={style.card_textContent}>
        <h3 className={style.card_title}>{title}</h3>
        <p className={style.card_desc}>{desc}</p>
      </div>
    </li>
  );
};
