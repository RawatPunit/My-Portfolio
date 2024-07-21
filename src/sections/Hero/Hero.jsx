import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import heroImg from "../../assets/hero-img.png";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg"
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme } = useTheme(); 
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark; 
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile pic of Punit" />
        <img
          className="styles.colorMode"
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
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
        <p className="styles.description">
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
