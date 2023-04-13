import React from "react";
import styles from "../../Styles/HomePage/StakingSection.module.css";

const StakingSection = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1 className={`${styles.sectionHeading}`}>STAKING</h1>
      <ul className={`${styles.liContainer}`}>
        <li>
          We Have A Number Of Different Staking Pools Available After Listing
          The Pools Will Have Different Locking Periods And Reward Rates.
        </li>
        <li>
          Staking Is Carried Out Via Smart Contract. While Staked, $HILO Tokens
          Cannot Be Traded, Sold, Or Used In Any Way.
        </li>
        <li>Users Can Reclaim All Staked Tokens.</li>
        <li>Deflationary Token Economy Is A Long-Term Goal.</li>
        <li>
          Once All Fundraising Rounds Are Complete, We Will Burn Any Unsold HILO
          Tokens. We Will Also Burn 2% Percentage Of HILO Tokens That Are Used
          To Purchase Our Playing Via Our HILO Game Platform.
        </li>
      </ul>
    </div>
  );
};

export default StakingSection;
