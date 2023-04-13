import React from "react";
import styles from "../../Styles/Shared/Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.mainContainer}`} id="suppor-Faq">
      <p>
        If you have further questions, please contact us with these details:
      </p>
      <p>team@hilo.game</p>
      <p>www.hilo.game</p>
      <p>Copyright © 2023 HiLo.game, All Right Reserved.</p>
    </div>
  );
};

export default Footer;
