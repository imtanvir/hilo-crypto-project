import React from "react";
import styles from "../../Styles/HomePage/SmartContract.module.css";
import stackenImg from "../../Assets/Images/stacken-img.png";
import coinCheckup from "../../Assets/Images/coin-checkup.png";
import defiTimes from "../../Assets/Images/defitimes.png";
import bitcoinleef from "../../Assets/Images/bitcoinleef.png";
import yahoo from "../../Assets/Images/yahoo.png";
import coinCodex from "../../Assets/Images/coin-codex.png";
import beinCrypto from "../../Assets/Images/bein-crypto.png";
import cryptoPotato from "../../Assets/Images/crypto-proten.png";
import icoHOtList from "../../Assets/Images/ico-hot-lits.png";
import panCake from "../../Assets/Images/pancake.png";
import bitMart from "../../Assets/Images/bitmart.png";
import maxcglobal from "../../Assets/Images/maxc-global.png";
import xtdotcom from "../../Assets/Images/xtdotcom.png";
import etherium from "../../Assets/Images/etherium-card.png";
import binance from "../../Assets/Images/binance.png";
import metaMask from "../../Assets/Images/metamask.png";
import trustWallet from "../../Assets/Images/trust-wallet.png";

const SmartContract = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      {/* /// top section /// */}
      <div className={`${styles.topSection}`}>
        <img src="logo.png" alt="" />
        <h2>smart contract audit by:</h2>
        <img src={stackenImg} alt="" />
      </div>
      {/* /// press section /// */}
      <div className={`${styles.pressSection}`}>
        <h1>press</h1>
        <div className={`${styles.pressImgsDiv}`}>
          <img src={coinCheckup} alt="" />
          <img src={defiTimes} alt="" />
          <img src={bitcoinleef} alt="" />
          <img src={yahoo} alt="" />
          <img src={coinCodex} alt="" />
          <img src={beinCrypto} alt="" />
          <img src={cryptoPotato} alt="" />
          <img src={icoHOtList} alt="" />
        </div>
      </div>
      {/* /// press section /// */}
      <div className={`${styles.pressSection}`}>
        <h1>Exchange Listings Agreed</h1>
        <div className={`${styles.pressImgsDiv}`}>
          <img src={panCake} alt="" />
          <img src={bitMart} alt="" />
          <img src={maxcglobal} alt="" />
          <img src={xtdotcom} alt="" />
        </div>
      </div>
      {/* /// press section /// */}
      <div className={`${styles.pressSection}`}>
        <h1>powered by</h1>
        <div className={`${styles.pressImgsDiv}`}>
          <img src={etherium} alt="" />
          <img src={binance} alt="" />
          <img src={metaMask} alt="" />
          <img src={trustWallet} alt="" />
        </div>
      </div>
      <div className={`${styles.bottomPeraDiv}`}>
        <p>
          Cryptocurrency may be unregulated in your jurisdiction. The value of
          cryptocurrencies may go down as well as up. Profits may be subject to
          capital gains or other taxes applicable in your jurisdiction.
          "HILO.GAME" . For more information about "HILO", Please write to:
          Team@hilo.game
        </p>
      </div>
    </div>
  );
};

export default SmartContract;
