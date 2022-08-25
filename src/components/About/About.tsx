import "./About.scss";

export default function About() {
  return (
    <section className="About" id="About">
      <h2 className="About__title">About Me</h2>
      <article className="About__main">
        <p className="About__info">
          Hello, I am Efdal and my passion is to create responsive and interactive
          web pages. User experience, beautiful pixels
          and clean, readable and reusable code matters for me.
        </p>
        <p className="About__info">
          I started coding as a hobby, which in time possessed me. 
          I left my career to do what I love doing. 
          Turns out that I am happy when I am creating and learning at the same time.
          Please feel free to &nbsp;
          <a href="mailto: yalcinefdal@gmail.com" className="About__contact">
            contact
          </a> 
          &nbsp; if you have sth interesting.
        </p>
      </article>
      <div className="About__tech">
        Tech I work with 
      </div>
    </section>
  );
}
