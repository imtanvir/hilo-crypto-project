import React from "react";
import styles from "../../Styles/HomePage/PurchaseBonus.module.css";
import purchaseAmount from "../../Assets/Images/Purchase amount.png";
import visitingPeriod from "../../Assets/Images/VESTING PERIOD.png";
import thirdImg from '../../Assets/Images/Group 1970.png'

const PurchaseBonus = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1 className={`${styles.sectionHeading}`}>PURCHASE BONUS</h1>

      <div className={`${styles.imgsContainer}`}>
        <img src={purchaseAmount} alt="purchase" />
        <img src={visitingPeriod} alt="purchase" />
        <img src={thirdImg} alt="purchase" />
      </div>
    </div>
  );
};

export default PurchaseBonus;
