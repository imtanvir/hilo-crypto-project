import React from "react";
import styles from "../../Styles/HomePage/WhitepaperSection.module.css";
import whitespaceImg from "../../Assets/Images/whitepaper.png";
import { HiOutlineExternalLink } from "react-icons/hi";

const WhitepaperSection = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      {/* /// left side /// */}
      <div className={`${styles.imgDiv}`}>
        <img src={whitespaceImg} alt="" />
      </div>
      {/* /// right side /// */}
      <div className={`${styles.rightSideDiv}`}>
        <h1>WHITEPAPER</h1>
        <h3>The Rising Future of Play to earn with HILO</h3>
        <p>
          We've assembled an expert team of Web3 Game developers to deliver on
          our ambitious project plans. Over the coming months, HILO will
          revolutionise the way people play and earn in the our app. Read our
          whitepaper to find out more.
        </p>
        <button>
          <span><HiOutlineExternalLink /></span> VIEW WHITEPAPER
        </button>
      </div>
    </div>
  );
};

export default WhitepaperSection;
