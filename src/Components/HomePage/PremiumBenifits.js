import React, { useState } from "react";
import styles from "../../Styles/HomePage/PremiumBenifits.module.css";
import sparkIcon from "../../Assets/Avatar/color-spark.png";
import potentialImg from "../../Assets/Images/potential-project-img.png";
import usersVoting from "../../Assets/Images/users-voting-img.png";
import profitesImg from "../../Assets/Images/profits-img.png";
import moreReffarals from "../../Assets/Images/more-refferals-img.png";
import investment from "../../Assets/Images/investment-img.png";

import potentialIcn from "../../Assets/Images/potential-icon.png";
import usersVotingIcn from "../../Assets/Images/users-voting-icon.png";
import profitesIcn from "../../Assets/Images/profits-icon.png";
import moreReffaralsIcn from "../../Assets/Images/more-refferals-icon.png";
import investmentIcn from "../../Assets/Images/investment-icon.png";
import { Modal } from "react-bootstrap";

const zindx = {
  zIndex: 3,
};
const PremiumBenifits = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div className={`${styles.mainContainer}`} id="memberBenefit">
      <div className={`${styles.headingDiv}`}>
        <img
          className={`${styles.sparkIcon}`}
          src={sparkIcon}
          alt="spark-icon"
        />
        <h1 className={`${styles.sectionHeading}`}>
          Premium Benefits for Hilo Members
        </h1>
        <img
          className={`${styles.sparkIcon}`}
          src={sparkIcon}
          alt="spark-icon"
        />
      </div>
      <div className={`${styles.imagesContainer}`}>
        <button
          type="button"
          className="btn p-0 "
          style={zindx}
          onClick={() => setShow(!show)}
        >
          <img src={potentialImg} alt="potential-img" />
        </button>
        <button
          type="button"
          className="btn p-0 "
          style={zindx}
          onClick={() => setShow1(!show1)}
        >
          <img src={usersVoting} alt="potential-img" />
        </button>
        <button
          type="button"
          className="btn p-0 "
          style={zindx}
          onClick={() => setShow2(!show2)}
        >
          <img src={profitesImg} alt="potential-img" />
        </button>
        <button
          type="button"
          className="btn p-0 "
          style={zindx}
          onClick={() => setShow3(!show3)}
        >
          <img src={moreReffarals} alt="potential-img" />
        </button>
        <button
          type="button"
          className="btn p-0 "
          style={zindx}
          onClick={() => setShow4(!show4)}
        >
          <img src={investment} alt="potential-img" />
        </button>
      </div>

      {/* modal */}

      <Modal
        centered
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        animation={true} 
        className={styles.modal_Style}
      >
        <div className={`${styles.modalBody}`}>
          <div className={`${styles.icnContainer}`}>
            <img src={potentialIcn} alt="" />
          </div>
          <h1 className={`text-center ${styles.headingFnt}`}>
            Potential Project
          </h1>
          <p className={`${styles.detailsPeraFnt}`}>
            The all New Hilo game project is full of potential. The project can
            be a huge success in upcoming years. Hilo game project can offer a
            secure, transparent, and decentralized way to play games with stable
            coin(USDT).
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            The first potential of this Hilo game project is its ease of use.
            Hilo game would be far easier to use than any existing lottery
            platform due to its built-in security and transparency. All the user
            needs to do is pay with their USDT coin, choose a side and the
            number they wish, and wait for 5 minutes for the drawing, They can
            play anytime they want. The Hilo game will run 24/7 (everyone will
            play the game together), and the game process is automated. This
            could greatly simplify the process of playing the Hilo game and make
            it more accessible to a wider audience.
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            The second potential of the Hilo game project is its ability to
            increase security. All transactions are recorded on the blockchain,
            which means that no one can tamper with the results. This could
            drastically reduce the potential for fraud as well as provide more
            assurance for players that their winnings will be secure.
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            Another advantage of the Hilo game project is the speed of payment.
            Players will receive rewards in less than a minute. Lottery payouts
            can take days or weeks to process however, with the use of Hilo,
            users are given the opportunity to withdraw 24/7.
          </p>
        </div>
      </Modal>

      <Modal
        centered
        size="lg"
        show={show1}
        onHide={() => setShow1(false)}
        animation={false} className={styles.modal_Style}
      >
        <div className={`${styles.modalBody}`}>
          <div className={`${styles.icnContainer}`}>
            <img src={usersVotingIcn} alt="" />
          </div>
          <h1 className={`text-center ${styles.headingFnt}`}>User's Voting</h1>
          <p className={`${styles.detailsPeraFnt}`}>
            Firstly, Hilo members have the right to submit feedback and vote
            through the Hilo vote system where members can post their
            suggestions and the community can discuss and vote on them. The most
            popular ideas can then be implemented into the project.
            Additionally, users can report bugs and other suggestions. so that
            the Hilo project can continuously be improved and developed.
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            HiLo members have the opportunity to vote on different aspects of
            the project. For example, members can vote on Which cryptocurrencies
            should be added, Which new features? This will allow the community
            to get involved in the development of the project and will help
            ensure that the project remains popular and successful.
          </p>
        </div>
      </Modal>

      {/* sdsdas */}

      <Modal
        centered
        size="lg"
        show={show2}
        onHide={() => setShow2(false)}
        animation={false} className={styles.modal_Style}
      >
        <div className={`${styles.modalBody}`}>
          <div className={`${styles.icnContainer}`}>
            <img src={profitesIcn} alt="" />
          </div>
          <h1 className={`text-center ${styles.headingFnt}`}>200% Profit!</h1>
          <p className={`${styles.detailsPeraFnt}`}>
            The house edge is 3% from withdraw fee. 100% of each game will go to
            the all winner, and the 3% fee will be reserved for platform
            operating costs. The Firstly 100% profit will be from when you win
            group side. The Second 100% profit will be from when choose the
            correct win number. All winner keep 100% of reward! We don’t charged
            winning fee like other games.
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            HiLo is the only enterprise that gives up to a 50% chance of winning
            the game and not charging a 0% fee. Every HiLo winner keeps 100%
            profit from their winnings without any cuts or taxes. Hilo will only
            charge 3% withdrawal fee. This revenue will be reserved for platform
            operating costs. Another option is a HiLo game referral reward
            system. More people can be pulled into the fold by paying people to
            refer others to the HiLo game.
          </p>
        </div>
      </Modal>
      {/* sdasdas */}
      <Modal
        centered
        size="lg"
        show={show3}
        onHide={() => setShow3(false)}
        animation={false} className={styles.modal_Style}
      >
        <div className={`${styles.modalBody}`}>
          <div className={`${styles.icnContainer}`}>
            <img src={moreReffaralsIcn} alt="" />
          </div>
          <h1 className={`text-center ${styles.headingFnt}`}>
            More Referrals More Rewards!
          </h1>
          <p className={`${styles.detailsPeraFnt}`}>
            A referral award system for a HiLo system project can be a great way
            to bring new users to the platform, increase engagement, and reward
            the most loyal customers. This system involves incentivizing
            existing customers to refer their friends and family to the HiLo
            system. To do this, customers are given a unique referral code that
            can be shared with their contacts.
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            Users can even receive rewards for life time as they play When a
            person signs up for the lottery system using the referral code, the
            original customer gets rewarded with 10% points.
          </p>
        </div>
      </Modal>
      {/* 345325423 */}

      <Modal
        centered
        size="lg"
        show={show4}
        onHide={() => setShow4(false)}
        animation={false} className={styles.modal_Style}
      >
        <div className={`${styles.modalBody}`}>
          <div className={`${styles.icnContainer}`}>
            <img src={investmentIcn} alt="" />
          </div>
          <h1 className={`text-center ${styles.headingFnt}`}>
            Investment Opportunities!
          </h1>
          <p className={`${styles.detailsPeraFnt}`}>
            Investing on HILO Platform can be a great way to potentially make a
            large return up to 200% on a small investment. Cryptocurrencies are
            a new and emerging asset class, and HILO’s lottery system can allow
            investors to diversify and hedge their investment portfolios. The
            biggest advantage of investing in a crypto lottery system is that it
            provides investors with the opportunity to win large jackpots up to
            200% with a relatively low investment.
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            HILO lottery system is also very convenient and easy to use. The
            system is accessible from all over the world and can be used with
            any device. Additionally, it also have mobile application that makes
            it even easier to play the game and check your winnings.
          </p>
          <p className={`${styles.detailsPeraFnt}`}>
            Lastly, investing in HILO can be a great way to get exposure to the
            cryptocurrency markets. As the price of cryptocurrencies continues
            to rise, the value of the jackpots that can be won in a crypto
            lottery system also increases. This provides investors with the
            opportunity to potentially make large returns on their investments.
          </p>
        </div>
      </Modal>

      {/* modal */}
    </div>
  );
};

export default PremiumBenifits;
