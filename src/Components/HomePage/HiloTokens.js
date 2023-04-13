import React, { useState } from "react";
import styles from "../../Styles/HomePage/HiloTokens.module.css";
import spark from "../../Assets/Avatar/spark-bg.png";
import sliderbg from "../../Assets/Images/slidericon.png";

const HiloTokens = () => {
  return (
    <div className={`${styles.mainContainer}`} id="hiloProgress">
      <h1 className={`${styles.sectionHeading}`}>HILO tokens sale progress</h1>
      {/* /// cards section /// */}
      <div className={`${styles.cardsContainer}`}>
        {/* /// each card /// */}
        <div className={`${styles.eachCard}`}>
          {/* // absolute section // */}
          <div className={`${styles.absoluteSection}`}>
            <img src={spark} alt="" />
          </div>

          {/* // card heading // */}
          <div className={`${styles.cardHeading}`}>
            <h5>Private Sale</h5>
            <h6>Live</h6>
          </div>
          {/* // card body // */}
          <div className={`${styles.table}`}>
            <div>
              <p>Start Date</p>
              <p>15-01-2023</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>EndDate</p>
              <p>TBC</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Token Pricing</p>
              <p>$0.0043</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Minimum</p>
              <p>$500</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Maximum</p>
              <p>$100,000</p>
            </div>
          </div>
        </div>
        {/* /// each card /// */}
        <div className={`${styles.eachCard}`}>
          {/* // absolute section // */}
          <div className={`${styles.absoluteSection}`}>
            <img src={spark} alt="" />
          </div>

          {/* // card heading // */}
          <div className={`${styles.cardHeading}`}>
            <h5>Public Sale</h5>
            <h6>(Upcoming)</h6>
          </div>
          {/* // card body // */}
          <div className={`${styles.table}`}>
            <div>
              <p>Start Date</p>
              <p>TBC</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>EndDate</p>
              <p>TBC</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Token Pricing</p>
              <p>$0.015</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Minimum</p>
              <p>$500</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Maximum</p>
              <p>$100,000</p>
            </div>
          </div>
        </div>
        {/* /// each card /// */}
        <div className={`${styles.eachCard}`}>
          {/* // absolute section // */}
          <div className={`${styles.absoluteSection}`}>
            <img src={spark} alt="" />
          </div>

          {/* // card heading // */}
          <div className={`${styles.cardHeading}`}>
            <h5>Pre Sale</h5>
            <h6>(Upcoming)</h6>
          </div>
          {/* // card body // */}
          <div className={`${styles.table}`}>
            <div>
              <p>Start Date</p>
              <p>TBC</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>EndDate</p>
              <p>TBC</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Token Pricing</p>
              <p>$0.022</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Minimum</p>
              <p>$500</p>
            </div>
            <p className={`${styles.devider}`}></p>
            <div>
              <p>Maximum</p>
              <p>$100,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.progressSliderContainer} pt-5`}>
        <h1 className="text-center">Public Sale - HILO tokens sold to date:</h1>
        <h2>
          <span className={`${styles.statusColor}`}></span>Pre Sale Live - ${" "}
          <span>50,000</span>
        </h2>
        <div className={`${styles.preSaleRoundLive}`}>
          <div className={`${styles.roundLiveImg}`}>
            <span className={styles.indicatorBar}></span>
            <img src={sliderbg} alt="" />
          </div>
        </div>
        <span className={styles.liveBtmTxt}>
          <p>Pre Sale Round Live</p>
        </span>
      </div>
    </div>
  );
};

export default HiloTokens;
