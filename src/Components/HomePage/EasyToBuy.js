import React from "react";
import styles from "../../Styles/HomePage/EasyToBuy.module.css";
import wolfIcon from "../../Assets/Avatar/wolf-icon.png";
import shieldIcon from "../../Assets/Avatar/shield-icon.png";
import wIcon from "../../Assets/Avatar/w-icon.png";
import etherIcon from "../../Assets/Avatar/etherium-icon.png";
import sparkIcon from "../../Assets/Avatar/colors-spark.png";
import tIcon from "../../Assets/Avatar/t-icon.png";
import { RiCloseFill } from "react-icons/ri";

const EasyToBuy = () => {
  return (
    <div className={`${styles.mainContainer}`} id="buyHilo">
      <h1 className={`${styles.sectionHeading}`}>Easy to buy $Hilo Token</h1>
      {/* /// icons div /// */}
      <div className={`${styles.iconsDiv}`}>
        <img className={`${styles.icon}`} src={wolfIcon} alt="icon" />
        <img className={`${styles.icon}`} src={shieldIcon} alt="icon" />
        <img className={`${styles.icon}`} src={wIcon} alt="icon" />
        <img className={`${styles.icon}`} src={etherIcon} alt="icon" />
        <img className={`${styles.icon}`} src={tIcon} alt="icon" />
      </div>
      {/* /// texts div /// */}
      <div className={`${styles.textsDiv}`}>
        <p>
          1. Firstly, make sure you have a Metamask account ready (for mobile
          users we recommend using TrustWallet instead)
        </p>
        <p>
          2. Click on the ‘Connect Wallet’ button to enable hilo to connect with
          your wallet. Once connected you can buy hilo tokens using ETH or USDT.
          Just choose the amount of hilo tokens you wish to buy and click
          ‘Convert’ (make sure you have at least $30 of ETH to cover gas fees).
        </p>
        <p>
          3. After the presale is over, you will be able to claim your hilo
          tokens. We’ll post the details closer to the time, but you’ll need to
          visit https://HILO.GAME/presale and click the ‘Claim’ button.
        </p>
      </div>

      {/* /// convert eth input section /// */}
      <div className={`${styles.convertSection}`} id="buy-hilo">
        {/* /// header /// */}
        <div className={`${styles.headerDiv}`}>
          <h3>EXCHAGE</h3>
          <span>
            <RiCloseFill />
          </span>
        </div>
        {/* /// body /// */}
        <div className={`${styles.bodySection}`}>
          <div>
            <label htmlFor="selling">Selling</label>
            <input type="number" name="selling" id="selling" />
            <div>
              <img src={etherIcon} alt=""  className="ether-icon"/>
              <p>ETH</p>
            </div>
          </div>
          <div>
            <label htmlFor="buying">Buying</label>
            <input type="number" name="buying" id="buying" />
            <div>
              <img src={sparkIcon} alt="" />
              <p>HILO</p>
            </div>
          </div>
          <div>
            <button className={styles.convertEthBtn} >CONVERT ETH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyToBuy;
