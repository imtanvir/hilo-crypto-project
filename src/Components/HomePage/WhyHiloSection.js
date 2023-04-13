import React from "react";
import styles from "../../Styles/HomePage/WhyHiloSection.module.css";
import sparkIcon from "../../Assets/Avatar/spark-icon.png";
import strome from "../../Assets/Images/strom_icon.png";
import line from "../../Assets/Images/line.png";
const WhyHiloSection = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1 className={`${styles.sectionHeading}`}>why HiLo Game?</h1>
      {/* ////// */}
      <div className={`${styles.textsDiv}`}>
        {/* /// */}
        <div className={`${styles.eachTextDiv}`}>
          <img className={styles.sparkIcon} src={sparkIcon} alt="spark-icon" />
          <p>
            <span>Problem statement</span> In comparison to the lottery, which
            has a one in a million chance of winning, it is nearly impossible
            for every person to win the lottery. The more users that play, the
            less chance of winning there is.
          </p>
        </div>
        {/* /// */}
        <div className={`${styles.eachTextDiv}`}>
          <img className={styles.sparkIcon} src={sparkIcon} alt="spark-icon" />
          <p>
            <span>Solution </span>For all the Users who want to win, HiLo came
            up with a solution. HiLo offers a 50% chance of winning a game
            without paying a game fee or a 0% fee , Players can also design
            their own prizes thanks to HiLo's modern technology. Regardless of
            the number of people playing, the chances of winning remain the
            same.
          </p>
        </div>
        {/* /// */}
        <div className={`${styles.eachTextDiv}`}>
          <img className={styles.sparkIcon} src={sparkIcon} alt="spark-icon" />
          <p>
            <span>Market Opportunity </span>Millions of people around the world
            love to play the lottery, making the market size very large. <br />
            HiLo game have the potential to attract a wider range of players.
            HiLo game can also offer players more flexibility. In conclusion,
            HiLo game offer a unique set of benefits that traditional lotteries
            do not.
          </p>
        </div>
        {/* /// */}
        <div className={`${styles.eachTextDiv}`}>
          <img className={styles.sparkIcon} src={sparkIcon} alt="spark-icon" />
          <p>
            <span>Marketing plan -</span> We can laser target a huge audience of
            players around the world by researching the world of lotteries. The
            best long-term marketing plan to attract people to a Hilo game is
            one that leverages the advantages of digital technology to create a
            secure, Good benefit, user-friendly platform. A strong online
            presence is key to success, and social media is the perfect tool to
            reach potential customers.
          </p>
        </div>
      </div>
          <div className={`${styles.stromeImg}`}>
            <img src={strome} alt="" />
          </div>
          <div className={`${styles.lineImg}`}>
            <img src={line} alt="" />
          </div>
    </div>
  );
};

export default WhyHiloSection;
