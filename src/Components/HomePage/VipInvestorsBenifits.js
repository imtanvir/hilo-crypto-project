import React from "react";
import styles from "../../Styles/HomePage/VipInvestorsBenifits.module.css";
import vipLogo from "../../Assets/Images/vip-logo.png";
import bronzeCard from "../../Assets/Images/Bronze card.png";
import silverCard from "../../Assets/Images/Silver card.png";
import goldCard from "../../Assets/Images/Golden card.png";
import platinumCard from "../../Assets/Images/Platinum card.png";
import diamondCard from "../../Assets/Images/Diamond card.png";
import monitorImg from "../../Assets/Images/monitor-img.png";

const VipInvestorsBenifits = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      {/* /// top part /// */}
      <div className={`${styles.topPartContainer}`}>
        {/* /// top part /// */}
        <div className={`${styles.topPart}`}>
          {/* /// */}
          <div className={`${styles.topPartLeft}`}>
            <img src={vipLogo} alt="" />
          </div>
          {/* /// */}
          <div className={`${styles.topPartRight}`}>
            <h1 className={`${styles.vipHeading}`}>
              VIP -<br /> Exclusive investor Benefits
            </h1>
            <p>
              As a way of showing our gratitude and appreciation to our VIP
              players, HILO.GAME invites you to join our VIP Club where there is
              an abundance of gifts, giveaways, higher cash back and unique
              features. Don't miss out on all the exciting and amazing fun!
            </p>
          </div>
        </div>
        {/* /// bottom part /// */}
        <div className={`${styles.cardsSection}`}>
          <img src={bronzeCard} alt="card-img" />
          <img src={silverCard} alt="card-img" />
          <img src={goldCard} alt="card-img" />
          <img src={platinumCard} alt="card-img" />
          <img src={diamondCard} alt="card-img" />
        </div>
      </div>
      {/* /// bottom part /// */}
      <div className={`${styles.bottomPartContainer}`}>
        <h1>hilo Community Clubhouse Forum</h1>
        <div className={`${styles.bottomImgDiv}`}>
          {/* /// left side /// */}
          <div className={`${styles.monitorImgDiv}`}>
            <img src={monitorImg} alt="monitor" />
          </div>
          <p>
            Hilo will have exciting new features like VIP club rewards and a
            Hall of Fame to recognize winners, as well as its own NFTs. With its
            own Community Clubhouse Forum providing voting options for members
            future of HILO looks bright.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VipInvestorsBenifits;
