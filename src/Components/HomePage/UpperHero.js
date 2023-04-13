import React from "react";
import styles from "../../Styles/HomePage/UpperHero.module.css";
import coinImg from "../../Assets/Images/TOKEN.png";
import textImg from "../../Assets/Images/hero-text-img.png";
import bubble from "../../Assets/Avatar/bubble.png";
import { Container } from "react-bootstrap";
const UpperHero = () => {
  const countNumber = () => {
    let count = 1;
    const h1 = document.querySelector('#count-display');
    if (!h1) {
        return; // exit the function if the element is not found
    }
    h1.innerText = count;

    const interval = setInterval(() => {
        count++;
        if (count > 10) {
            count = 1;
        }
        h1.style.transition = 'all 1s ease-in-out';
        h1.style.opacity = 0;
        setTimeout(() => {
            h1.style.opacity = 1;
            h1.innerText = count;
        }, 1250); // wait for 1.25 seconds and then fade in and update count
    }, 3500); // wait for 2.5 seconds before updating count
}
    window.onload = function activateCount() {
      countNumber();
    };
  return (
    <div className={`${styles.mainContainer}`}>
      {/* /// BACKGROUND /// */}
      {/* <img className={`${styles.skyBG}`} src={skyBG} alt="bg" /> */}
      <Container>
        <img
          className={`${styles.bubbleAvatar}`}
          src={bubble}
          alt="bubble-avatar"
        />
        <img
          className={`${styles.bubbleAvatar2}`}
          src={bubble}
          alt="bubble-avatar"
        />
        <img
          className={`${styles.bubbleAvatar3}`}
          src={bubble}
          alt="bubble-avatar"
        />
        <img
          className={`${styles.bubbleAvatar4}`}
          src={bubble}
          alt="bubble-avatar"
        />
        <img
          className={`${styles.bubbleAvatar5}`}
          src={bubble}
          alt="bubble-avatar"
        />
        <img
          className={`${styles.bubbleAvatar6}`}
          src={bubble}
          alt="bubble-avatar"
        />
        <div className={styles.heroSectionContainer} id="home">
          {/* /// LEFT SIDE /// */}
          <div className={`${styles.leftsideCont}`}>
            <div className={`${styles.countDownNum}`} >
              <h1 id="count-display"></h1>
            </div>
            <div>
              <img className={`${styles.coinImg}`} src={coinImg} alt="img" />
            </div>
          </div>

          {/* /// RIGHT SIDE /// */}
          <div className={`${styles.rightSideCont}`}>
            <img className={`${styles.textImg}`} src={textImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpperHero;
