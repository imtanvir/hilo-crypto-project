import React from "react";
import styles from "../../Styles/HomePage/GameReffaralReward.module.css";
import wave from "../../Assets/Images/wave-img.png";

const GameReffaralReward = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.gameReffrlTxtDiv}`}>
        <h1>game referral reward </h1>
        <img src={wave} alt="" className={styles.waveImg}/>
      </div>
      <div className={`${styles.midSection}`}>
        <h1 className={`${styles.tenPercentTxt}`}>10%</h1>
        <div>
          <p>
            Users will earn a reward of <span>10%</span> from their referrals
            for winning games on the HiLo platform
          </p>
          <p>
            <span>For example</span> if you invite a friend to play HiLo using
            your referral link and he plays 100 games and wins, you will receive
            10 HiLo tokens as a reward.
          </p>
        </div>
      </div>
      <div className={`${styles.bottomSection}`}>
        <h1>
          <span>More</span> Referrals – <span>More</span> Chances –{" "}
          <span>More</span> Money!
        </h1>
        <p>
          Invite your friends to the HiLo Game and get rewarded with 10% of
          their winnings! With your referral link, they'll get the chance to win
          big, and you'll get a piece of the action too!
        </p>
        <h6>
          <span>So why wait?</span> Invite your friends now and start earning
          rewards!
        </h6>
        <h6>#PlayHiLoAndWinBig #GetRewardedForReferringFriends</h6>
      </div>
    </div>
  );
};

export default GameReffaralReward;
