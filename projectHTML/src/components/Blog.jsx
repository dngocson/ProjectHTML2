import style from "./Blog.module.scss";
const Blog = () => {
  return (
    <section className={style.blog}>
      <div className={style.blog_header}>
        <h3 className={style.blog_title}>Our Blog</h3>
        <p className={style.blog_desc}>
          Stay up to date with the latest tech trands and news in the pets.
        </p>
        <a href="#!" className={style_blog_link}>
          View All Blog
        </a>
      </div>
    </section>
  );
};

export default Blog;

const BlogCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card_imgHolder}>
        <p className={style.card_date}></p>
      </div>
    </div>
  );
};
