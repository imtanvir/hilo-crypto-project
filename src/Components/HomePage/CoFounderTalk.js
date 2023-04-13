import React from "react";
import styles from "../../Styles/HomePage/CoFounderTalk.module.css";
import ken from "../../Assets/Images/Ken.png";
import susana from "../../Assets/Images/Susan.png";
import david from "../../Assets/Images/david.png";
import timY from "../../Assets/Images/tim-y.png";
import lady from "../../Assets/Images/lady.png";
import alex from "../../Assets/Images/alex.png";
import linkdin from "../../Assets/Images/linkdin.png";

const CoFounderTalk = () => {
  return (
    <div className={`${styles.mainContainer}`} id="team-details">
      <h1 className={`${styles.sectionHeading}`}>co-founder talk</h1>
      <div>
        {/* /// top part /// */}
        <div className={`${styles.topPart}`}>
          {/* /// left side /// */}
          <div className={`${styles.topPartLeft}`}>
            <p>
              <span>Ken and Susan</span> are the project’s founders and wanted
              to create something more than just another lottery game; they
              wanted to make sure their game was a success and that their
              company was around for the long term. So they made HILO! An ever
              lasting crypto lottery project.
            </p>
            <p>
              <span>The Founders </span>have a great aim and a strong vision for
              the future of their project. They want to create a game that would
              last for generations, and be the one that would make a positive
              impact on people's lives They have done this by providing them
              with equal opportunities in their game along with the chances of
              winning profit.
            </p>
          </div>
          {/* /// right side /// */}
          <div>
            <div className={`${styles.topPartRight}`}>
              <div className={ `${styles.kenBox} text-center`}>
                <img src={ken} alt="ceo" />
                <div className={`${styles.kenDtls} text-center`}>
                  <h2 className={`${styles.DtlsHead}`}>KEN</h2>
                  <p className={`${styles.DtlsP}`}>Ken has worked on numerous P2P, P2E, Gamefi, and crypto currency projects. Ken has been working in the blockchain field since 2017. He is a seasoned professional who has worked on numerous projects behind the scenes.</p>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className={`${styles.DtlsImg} ${styles.dtlsAnchor}`} src={linkdin} alt="" /></a>
                </div>
              </div>
              <div className={`${styles.susanaBox} text-center`}>
                <img src={susana} alt="ceo" />
                <div className={`${styles.susanaDtls}`}>
                  <h2 className={`${styles.DtlsHead}`}>SUSANA</h2>
                  <p className={`${styles.DtlsP}`}>Susan has been working in creative operations for ten years, helping to structure the creative process within a firm. She is continuously assisting people in moving faster and doing better work.</p>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className={`${styles.DtlsImg} ${styles.dtlsAnchor}`} src={linkdin} alt="" /></a>
                </div>
              </div>
            </div>
            <div className={`${styles.bottomUnderline}`}></div>
            <div className={`${styles.ceosNamediv}`}>
              <h4>KEN T. - CEO</h4>
              <h4>SUSAN S.- COO</h4>
            </div>
          </div>
        </div>
        {/* /// bottom part /// */}
        <div className={`${styles.bottomPart}`}>
          <h1 className={`${styles.bttmSctionHeading}`}>core team</h1>
          <p>
            HILO,s core team is the nucleus of project. The core team is
            responsible for providing direction, guidance, and oversight. It is
            the core team’s responsibility to ensure that the project is
            properly managed and that the objectives are achieved. The team’s
            leadership is experienced in the crypto/blockchain space and
            knowledgeable of the project’s goals.
          </p>
          {/* /// bottom imgs section /// */}
          <div className={`${styles.bttmImgsSection}`}>
            <div>
              <img src={timY} alt="" />
              <h4>Project Manger </h4> <h4>Tim Y.</h4>
            </div>
            <div>
              <img src={lady} alt="" />
              <h4>Growth Lead</h4>
              <h4>Leanne H.</h4>
            </div>
            <div>
              <img src={alex} alt="" />
              <h4>Game Design & Dev</h4>
              <h4>Alex R.</h4>
            </div>
            <div>
              <img src={david} alt="" />
              <h4>Head Blockchain Dev </h4>
              <h4>David B.</h4>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoFounderTalk;
