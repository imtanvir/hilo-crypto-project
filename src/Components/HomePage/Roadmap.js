import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/HomePage/Roadmap.css";
const Roadmap = () => {
  return (
    <div className="roadmap-section" id="roadmapHilo">
      <div className="roadmap-section-wrapper">
          <Container className="wrapper-div pt-5">
          <div className="roadmap-main-div">
            {/* -----------------first pair ------------ */}
            <Row className="g-4 mt-5 txtHvrClr">
              <Col xs={12} md={8} lg={8}>
                <div className="d-flex align-items-center hvrCls">
                  <div className="roadmap-instruction">
                    <ul>
                      <li>Planning/Concept Generation For Hilo Token</li>
                      <li>Market analysis</li>
                      <li>Recruited expert team</li>
                      <li>Advisors joined the team</li>
                    </ul>
                  </div>
                  <div className="line-div "></div>
                  <div className="circle-div"></div>
                </div>
              </Col>
              <Col
                className="d-flex flex-column justify-content-center"
                xs={12}
                md={4}
                lg={4}
              >
                <div>
                  <h1 className="concept-header txtHead">Concept</h1>
                  <h1 className="concept-header nmbrHead">Q3,2022 </h1>
                  <p className="concept-para">Completed</p>
                </div>
              </Col>
            </Row>
            <Row className="g-4 mt-5 txtHvrClr">
              <Col
                className="d-flex flex-column justify-content-center"
                xs={12}
                md={4}
                lg={4}
              >
                <div className="team-work-dv">
                  <h1 className="concept-header txtHead">Team Work</h1>
                  <h1 className="concept-header nmbrHead">Q4,2022 </h1>
                  <p className="concept-para">Completed</p>
                </div>
              </Col>
              <Col xs={12} md={8} lg={8}>
                <div className="d-flex align-items-center hvrCls">
                  <div className="circle-div"></div>
                  <div className="line-div "></div>

                  <div className="roadmap-instruction">
                    <ul>
                      <li> Start Design Game</li>
                      <li>Website Build Commenced</li>
                      <li>Start Building Game</li>
                      <li>Lunch Strategy Tokenomics Finalized</li>
                      <li>Whitepaper Content Written</li>
                      <li>
                        {" "}
                        Secured Agreements To Help Build The Foundation Of Hilo
                        Token
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>

            {/* second pair */}
            <Row className="g-4 mt-5 txtHvrClr">
              <Col xs={12} md={8} lg={8}>
                <div className="d-flex align-items-center hvrCls">
                  <div className="roadmap-instruction">
                    <ul>
                      <li>Presale Website Lunch</li>
                      <li>Smart Contracts & Audit</li>
                      <li>Whitepaper Released</li>
                      <li>Social Media Channels Launched</li>
                      <li>Marketing Campaign v1 Lunch</li>
                      <li>Pancakeswap Listing</li>
                    </ul>
                  </div>
                  <div className="line-div "></div>
                  <div className="circle-div"></div>
                </div>
              </Col>
              <Col
                className="d-flex flex-column justify-content-center"
                xs={12}
                md={4}
                lg={4}
              >
                <div>
                  <h1 className="concept-header txtHead">
                    Presale <br />
                    Begin
                  </h1>
                  <h1 className="concept-header concept-para nmbrHead">Q3,2022 </h1>
                </div>
              </Col>
            </Row>
            <Row className="g-4 mt-5 txtHvrClr">
              <Col
                className="d-flex flex-column justify-content-center"
                xs={12}
                md={4}
                lg={4}
              >
                <div>
                  <h1 className="concept-header txtHead"> Lunch</h1>
                  <h1 className="concept-header txtHead">Hilo Game</h1>
                  <h1 className="concept-header nmbrHead">Q2,2023 </h1>
                  {/* <p className="concept-para">Completed</p> */}
                </div>
              </Col>
              <Col xs={12} md={8} lg={8}>
                <div className="d-flex align-items-center hvrCls">
                  <div className="circle-div"></div>
                  <div className="line-div "></div>

                  <div className="roadmap-instruction">
                    <ul>
                      <li> Testing Hilo Game</li>
                      <li>
                        Exclusive Invitation For Presale investors Play Game with
                        Extra Bonus
                      </li>
                      <li>Lunch Hilo Game</li>
                      <li>official Hilo Website Lunched</li>
                      <li>$HILO Staking Lunched</li>
                      <li>Marketing Campaign V2 Lunched</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>

            {/* third pair */}
            <Row className="g-4 mt-5 mb-5 txtHvrClr">
              <Col xs={12} md={8} lg={8}>
                <div className="d-flex align-items-center hvrCls">
                  <div className="roadmap-instruction">
                  <ul>
                      <li> Listing Hilo Token on CEX</li>
                      <li>Token Public Sale $HILO</li>
                      <li>
                        Open Suggest & Voting Platform For Hilo Token Holders
                      </li>
                      <li>Lunched Winner Of The Year Platform</li>
                      <li>
                        {" "}
                        VIP Club Reward and Hall Of Fame To Recognize Winners
                      </li>
                      <li> Lunch Hilord NFT</li>
                      <li>Lunch Clubhouse Forum</li>
                    </ul>
                  </div>
                  <div className="line-div "></div>
                  <div className="circle-div"></div>
                </div>
              </Col>
              <Col
                className="d-flex flex-column justify-content-center"
                xs={12}
                md={4}
                lg={4}
              >
                <div className="byond-dv">
                  <h1 className="concept-header txtHead">Beyond</h1>
                  <h1 className="concept-header nmbrHead">Q3,2023 </h1>

                </div>
              </Col>
            </Row>
          </div>
          </Container>
      </div>
    </div>
  );
};

export default Roadmap;
