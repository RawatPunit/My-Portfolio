import styles from "./HeroStyles.module.css";
import themeIcon from "../../assets/sun.svg";
import heroImg from "../../assets/hero-img.png";
import linkedinIcon from "../../assets/linkedin-light.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile pic of Punit" />
        <img
          className="styles.colorMode"
          src={themeIcon}
          alt="Color Mode Icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Punit <br />
          Rakesh <br /> Rawat
        </h1>
        <h2>Software Test Engineer</h2>
        <span>
          <a href="https://www.linkedin.com" target="_blank">
            <img src={linkedinIcon} alt="linkedin"></img>
          </a>
          <a href="https://www.github.com" target="_blank">
            <img src={githubIcon} alt="github"></img>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitterIcon} alt="twitter"></img>
          </a>
        </span>
        <p>
          With a passion for Testing Software and thrill of discovering bugs
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
