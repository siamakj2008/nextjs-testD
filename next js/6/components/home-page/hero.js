import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sia.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sia!</h1>
      <p>
        I blog about web development- especially fronted frameworks like React.
      </p>
    </section>
  );
}

export default Hero;
