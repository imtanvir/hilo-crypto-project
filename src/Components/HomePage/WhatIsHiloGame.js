import React from "react";
import styles from "../../Styles/HomePage/WhatIsHiloGame.module.css";
import stepImg from "../../Assets/Images/3-steps.jpg";
import handIcon from "../../Assets/Avatar/hand-icon.png";
import clockIcon from "../../Assets/Avatar/clock-icon.png";
import prizeIcon from "../../Assets/Avatar/prize-icon.png";

const WhatIsHiloGame = () => {
  return (
    <div className={`${styles.mainContainer}`} id='Game'>
      <p className={`${styles.sectionHeading}`}>What is HiLo Game?</p>
      {/* /////// */}
      <div className={`${styles.peraContainer}`}>
        <p className={`${styles.firstPera}`}>
          <span>The HiLo Game</span> is a multiplayer crypto game created for
          every crypto user. A lot of users can play the game at the same time
          and win new rewards. that is played on-chain. With its high security,
          Hilo is ensuring that everyone can play safely and securely.
        </p>
        <p className={`${styles.firstPera}`}>
          <span>HiLo game is using USDT</span> as the only currency for playing
          the game. Our goal in using its to make it as simple as possible for
          users to access the game.
        </p>
        <p className={`${styles.firstPera}`}>
          <span>The core team</span> of the HiLo game project is essential to
          its success. Our team includes blockchain developers, business
          analysts, game developers, game and website designers, marketing team,
          project managers, and cyber security experts from a variety of fields.
        </p>
      </div>
      {/* //////// */}
      <div className={`${styles.stepsContainer}`}>
        {/* ///// left side //// */}
        <div className={`${styles.stepsImgDiv}`}>
          <h1 className={`${styles.visibleOut} ${styles.visibleTime}`}>
            Easy to Play HiLo game with 3 steps
          </h1>
          <img src={stepImg} alt="mobile" />
        </div>
        {/* ///// right side ///// */}
        <div className={`${styles.stepRightSideDiv}`}>
          <h1 className={`${styles.hideTime}`}>
            Easy to Play HiLo game with 3 steps
          </h1>
          <p className={`${styles.firstPera}`}>
            <span>You can play </span>the game while the time is running until
            the time runs out. Then a new game will start, every game will take
            5 minutes to produce the prize numbers.
          </p>
          {/* ////// */}
          <div className={`${styles.steps}`}>
            {/* /// */}
            <div className={`${styles.step}`}>
              <div>
                <img src={handIcon} alt="hand-icon" />
              </div>
              <div className={`${styles.stepTxtContainer}`}>
                <h2>
                  Select a group(HIGH or LOW)
                  <br /> and the Number you wish
                </h2>
                <p>
                  The Low group has numbers 1-5, while the High group has
                  numbers 6-10.
                </p>
              </div>
            </div>
            {/* /// */}
            <div className={`${styles.step}`}>
              <div>
                <img src={clockIcon} alt="clock-icon" />
              </div>
              <div className={`${styles.stepTxtContainer}`}>
                <h2>Wait for the draw</h2>
                <p>Wait for the draw prize in 5 minutes.</p>
              </div>
            </div>
            {/* /// */}
            <div className={`${styles.step}`}>
              <div>
                <img src={prizeIcon} alt="hand-icon" />
              </div>
              <div className={`${styles.stepTxtContainer}`}>
                <h2>Check for prizes</h2>
                <p>
                  when you win, the prize will be automatically deposited into
                  your Hilo wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsHiloGame;
