import React from "react";
import { Container } from "react-bootstrap";
import "../../Styles/HomePage/Tokenomics.css";
import bolt from "../../Assets/Avatar/bolt.svg";
import conic from "../../Assets/Avatar/conic.svg";
import cubic from "../../Assets/Avatar/cubic.svg";
import cube from "../../Assets/Avatar/cube.svg";
import hexagon from "../../Assets/Avatar/hexagon.svg";
import shield from "../../Assets/Avatar/shield.svg";
import salePrice from "../../Assets/Avatar/sale-price.svg";
import tokenType from "../../Assets/Avatar/token-type.svg";
import tokenTypeLight from "../../Assets/Avatar/token-type-light.svg";
import boltRound from "../../Assets/Avatar/bolt-round.svg";
import userGroup from "../../Assets/Avatar/user-group.svg";
import tockenomicBg from '../../Assets/Images/tockenomics.png';
import { styled } from '@mui/material/styles';
const Tokenomics = () => {
  return (
    <div>
      <Container id="hiloToken">
        <div className="hilo-token-desc">
          {" "}
          <h1>$HILO Token</h1>
          <p className="mb-0">
            The HILO Token is a DEFI token that will be created on Binance Smart
            Chain to give the
          </p>
          <p>
            whole gaming ecosystem an easy access to participate in the gaming
            revolution.
          </p>
          <p>
            Add HILO Tokens to your wallet using the contract information below.{" "}
            <br />
            $HILO Tokens will appear in your wallet after you have claimed them.{" "}
            <br />
          </p>
          <p>
            {" "}
            <span className="blockchain-url">
              $HILO Verified Smart Contract Address::
            </span>
            <br /> <span>0xdfgg4eA09f7eF54080Eb358B03ce9107c45662</span>
          </p>
        </div>
        <div>
          <h1 className="text-center">Tokenomics</h1>
          <img
            src={conic}
            width={'20%'}
            height={'18%'}
            alt="conic"
            className="background-images"
            style={{ position: 'absolute', left: '23%', marginTop: '-5%', zIndex: 0 }}
          />
          <img
            src={hexagon}
            width={'20%'}
            height={'18%'}
            alt="hexagon"
            className="background-images"
            style={{ position: 'absolute', right: '10%', marginTop: '-10%' }}
          />
          <div className="main-container-tokens">
            <img className="main-container-tokens-img" src={tockenomicBg} alt="" />
          </div>
          <img
            src={cubic}
            width={'20%'}
            height={'18%'}
            alt="cubic"
            className="background-images"
            style={{ position: 'absolute', left: '22%', marginTop: '-7%' }}
          />
          <img
            src={cube}
            width={'20%'}
            height={'18%'}
            alt="cube"
            className="background-images"
            style={{ position: 'absolute', right: '10%', marginTop: '-6%'}}
          />
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;
