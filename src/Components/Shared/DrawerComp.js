import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import styles from "../../Styles/Shared/Nav.module.css";
import { RiExternalLinkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import firstSc from "../../Assets/Avatar/first-sc.png";
import secondSc from "../../Assets/Avatar/second-sc.png";
import thirdSc from "../../Assets/Avatar/third-sc.png";
import fourthSc from "../../Assets/Avatar/fourth-sc.png";
import fifthSc from "../../Assets/Avatar/fifth-sc.png";
import sixthSc from "../../Assets/Avatar/sixth-sc.png";
import seventhSc from "../../Assets/Avatar/seventh-sc.png";
import eightSc from "../../Assets/Avatar/eight-sc.png";
import ninethSc from "../../Assets/Avatar/ninth-sc.png";
import tenthSc from "../../Assets/Avatar/tenth-sc.png";
import fox from "../../Assets/Images/fox.png";
import shild from "../../Assets/Images/shild.png";
import wallet from "../../Assets/Images/wallet.png";
import { IoClose } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerComp = ({ children }) => {
  // STATES
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [activeLink, setActiveLink] = React.useState('/');
  const [showSmDrawer, setShowSmDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuShow = () => {
    document.getElementById("smlMenu").style.display = "block";
  };
  const menuHide = () => {
    document.getElementById("smlMenu").style.display = "none";
  };
  const menuShow2 = () => {
    document.getElementById("smlMenu2").style.display = "block";
  };
  const menuHide2 = () => {
    document.getElementById("smlMenu2").style.display = "none";
  };
  return (
    <>
      {/* /// navbar for large device /// */}
      <div className={`${styles.largeNav}`}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            sx={{
              background: "black",
              borderBottom: "2px solid #04C983",
            }}
            position="fixed"
            open={open}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuOpenIcon sx={{ color: "white", fontSize: "2.5rem" }} />
              </IconButton>
              {/* ///// */}
              <div className={`${styles.navHeadContainer}`}>
                {/* /// */}
                <div className={`${styles.tkPriceTxt}`}>
                  <p>Token PriceO $0.0043</p>
                </div>
                {/* /// */}
                <div className={`${styles.whitepprBtn}`}>
                  <button>
                    <RiExternalLinkFill className={`${styles.linkIcon}`} />{" "}
                    whitepaper
                  </button>
                </div>
                {/* /// */}
                <div className={`${styles.connectBtn}`}>
                  <button id="cnctBtn" onClick={menuShow}>
                    CONNECT
                  </button>
                  <div
                    className={`${styles.connectMenuContainer}`}
                    id="smlMenu"
                  >
                    <h3 className={`${styles.menuHeadingTxt}`}>
                      PICK YOUR WALLET
                    </h3>
                    <a href="" className={`text-decoration-none`}>
                      <div className="d-flex p-3 mb-3 bg-light align-items-center">
                        <img
                          className={styles.menuImgsizing}
                          src={fox}
                          alt=""
                        />
                        <h3 className={`${styles.menuTxtSz} ps-3 text-dark`}>
                          METAMASK
                        </h3>
                      </div>
                    </a>
                    <a href="" className={`text-decoration-none`}>
                      <div className="d-flex p-3 mb-3 bg-light align-items-center">
                        <img
                          className={styles.menuImgsizing}
                          src={shild}
                          alt=""
                        />
                        <h3 className={`${styles.menuTxtSz} ps-3 text-dark`}>
                          TRUST WALLET
                        </h3>
                      </div>
                    </a>
                    <a href="" className={`text-decoration-none`}>
                      <div className="d-flex p-3 mb-3 bg-light align-items-center">
                        <img
                          className={styles.menuImgsizing}
                          src={wallet}
                          alt=""
                        />
                        <h3 className={`${styles.menuTxtSz} ps-3 text-dark`}>
                          WALLET CONNECT
                        </h3>
                      </div>
                    </a>
                    <a
                      id="clsBtn"
                      className="text-decoration-none"
                      onClick={menuHide}
                    >
                      <button
                        type="button"
                        className={`${styles.cancleBtn} btn btn-outline-dark`}
                      >
                        Cancel
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                background: "#000",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader
              sx={{
                background: "black",
                padding: "6px 1rem",
                borderBottom: "2px solid #04C983",
              }}
            >
              <div className={`${styles.drwerHead}`}>
                <img className={`${styles.logo}`} src={"logo.png"} alt="logo" />
              </div>
              <IconButton onClick={handleDrawerClose} style={{padding:'6px'}}>
                {theme.direction === "ltr" ? (
                  <MenuOpenIcon sx={{ color: "white", fontSize: "2.5rem" }} />
                ) : (
                  <ChevronRightIcon sx={{ color: "white" }} />
                )}
              </IconButton>
            </DrawerHeader>
            <List
              sx={{
                background: "black",
                color: "white"
              }}
              //  className={styles.drawerHeight}
            >
              <HashLink
                className="text-decoration-none text-white"
                to="/#home"
              >
              <ListItem
                onClick={() => {
                  setActiveLink("/");
                  navigate("/");
                }}
                key={"Home"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "/" && styles.activeLink
                  }`}
                >
                    {"Home"}
                </p>
              </ListItem>
                  </HashLink>
              <HashLink
                  className="text-decoration-none text-white"
                  to="/#hiloProgress"
                >
              <ListItem
                onClick={() => {
                  setActiveLink("Sale Progress");
                }}
                key={"Sale Progress"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "Sale Progress" && styles.activeLink
                  }`}
                >
                    {"Sale Progress"}
                </p>
              </ListItem>
                  </HashLink>
                  {/* {"Game"} */}
                  <HashLink
                    className="text-decoration-none text-white"
                    to="/#Game"
                  >
              <ListItem
                onClick={() => setActiveLink("Game")}
                key={"Game"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "Game" && styles.activeLink
                  }`}
                >
                    {"Game"}
                </p>
              </ListItem>
                  </HashLink>
                  <HashLink
                    className="text-decoration-none text-white"
                    to="#memberBenefit"
                  >
              <ListItem
                onClick={() => setActiveLink("Member Benefit")}
                key={"Member Benefit"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "Member Benefit" && styles.activeLink
                  }`}
                >
                    {"Member Benefit"}
                </p>
              </ListItem>
                  </HashLink>
                  <HashLink
                    className="text-decoration-none text-white"
                    to="#hiloToken"
                  >
              <ListItem
                onClick={() => setActiveLink("HILO Token")}
                key={"HILO Token"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "HILO Token" && styles.activeLink
                  }`}
                >
                    {"HILO Token"}
                </p>
              </ListItem>
                  </HashLink>
                  <HashLink
                    className="text-decoration-none text-white"
                    to="#buyHilo"
                  >
              <ListItem
                onClick={() => setActiveLink("How to Buy HILO Token?")}
                key={"How to Buy HILO Token?"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "How to Buy HILO Token?" && styles.activeLink
                  }`}
                >
                    {"How to Buy HILO Token?"}
                </p>
              </ListItem>
                  </HashLink>
                  <HashLink
                    className="text-decoration-none text-white"
                    to="#roadmapHilo"
                  >
              <ListItem
                onClick={() => setActiveLink("Roadmap")}
                key={"Roadmap"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "Roadmap" && styles.activeLink
                  }`}
                >
                    {"Roadmap"}
                </p>
              </ListItem>
                  </HashLink>
                  <HashLink
                    className="text-decoration-none text-white"
                    to="#team-details"
                  >
              <ListItem
                onClick={() => setActiveLink("Team")}
                key={"Team"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "Team" && styles.activeLink
                  }`}
                >
                    {"Team"}
                </p>
              </ListItem>
                  </HashLink>
              <ListItem
                onClick={() => {
                  setActiveLink("new-to-crypto");
                  navigate("/new-to-crypto");
                }}
                key={"New To Crypto?"}
                disablePadding
              >
                <p
                  className={`${styles.linkText} ${
                    activeLink === "new-to-crypto" && styles.activeLink
                  }`}
                >
                  {"New To Crypto?"}
                </p>
              </ListItem>
              <ListItem>
                <div>
                  <div className={`d-flex flex-column align-items-center`}>
                      <HashLink
                        className="text-decoration-none text-white"
                        to="#buy-hilo"
                      >
                    <button className={styles.buttonBuy}>
                        Buy $hilo now
                    </button>
                      </HashLink>
                      <HashLink
                        className="text-decoration-none text-white"
                        to="#suppor-Faq"
                      >
                    <button className={styles.buttonSupport}>
                        Support
                    </button>
                      </HashLink>
                  </div>
                  <div className={`${styles.iconsHeader}`}>
                    <img src={firstSc} alt="icon" />
                    <img src={secondSc} alt="icon" />
                    <img src={thirdSc} alt="icon" />
                    <img src={fourthSc} alt="icon" />
                    <img src={fifthSc} alt="icon" />
                    <img src={sixthSc} alt="icon" />
                    <img src={seventhSc} alt="icon" />
                    <img src={eightSc} alt="icon" />
                    <img src={ninethSc} alt="icon" />
                    <img src={tenthSc} alt="icon" />
                  </div>
                </div>
              </ListItem>
            </List>
          </Drawer>
          <Main open={open} sx={{ background: "black", padding: "0" }}>
            <DrawerHeader />
            {/* //// CHILDREN //// */}
            {children}
          </Main>
        </Box>
      </div>

      {/* /// navbar for small device /// */}
      <div className={`${styles.smallNav}`}>
        {/* /// navbar heading /// */}
        <div className={`${styles.smNavContainer}`}>
          <img className={`${styles.smLogo}`} src="logo.png" alt="" />
          <div className={`${styles.headeNav}`}>
            <div className={`${styles.navBox}`}>
              <h6>Token PriceT $0.0043</h6>
              <div>
                  <div className={`${styles.whitepprBtn}`}>
                          <button>
                            <RiExternalLinkFill className={`${styles.linkIcon}`} />{" "}
                            whitepaperS
                          </button>
                  </div>
                      {/* /// */}
                  <div className={`${styles.connectBtn}`}>
                        <button id="cnctBtn2" onClick={menuShow2} className={`${styles.smlConnectBtn}`}>
                          CONNECTS
                        </button>
                    <div className={`${styles.smlSzBtn}`} style={{display:"none"}}
                          id="smlMenu2"
                        >
                          <h3 className={`${styles.menuHeadingTxt} text-white`}>
                            PICK YOUR WALLET nakli
                          </h3>
                          <a href="" className={`text-decoration-none`}>
                            <div className="d-flex p-3 mb-3 bg-light align-items-center">
                              <img
                                className={styles.menuImgsizing}
                                src={fox}
                                alt=""
                              />
                              <h3 className={`${styles.menuTxtSz} ps-3 text-dark`}>
                                METAMASK
                              </h3>
                            </div>
                          </a>
                          <a href="" className={`text-decoration-none`}>
                            <div className="d-flex p-3 mb-3 bg-light align-items-center">
                              <img
                                className={styles.menuImgsizing}
                                src={shild}
                                alt=""
                              />
                              <h3 className={`${styles.menuTxtSz} ps-3 text-dark`}>
                                TRUST WALLET
                              </h3>
                            </div>
                          </a>
                          <a href="" className={`text-decoration-none`}>
                            <div className="d-flex p-3 mb-3 bg-light align-items-center">
                              <img
                                className={styles.menuImgsizing}
                                src={wallet}
                                alt=""
                              />
                              <h3 className={`${styles.menuTxtSz} ps-3 text-dark`}>
                                WALLET CONNECT
                              </h3>
                            </div>
                          </a>
                          <a
                            id="clsBtn"
                            className="text-decoration-none"
                            onClick={menuHide2}
                          >
                            <button
                              type="button"
                              className={`${styles.cancleBtn} btn btn-outline-dark`}
                            >
                              Cancel
                            </button>
                          </a>
                        </div>
                  </div>
              </div>
            </div>  

            <p onClick={() => setShowSmDrawer(true)}>
              <MdOutlineMenuOpen />
            </p>
          </div>
        </div>
        <Main open={open} sx={{ background: "black", padding: "0" }}>
          <DrawerHeader />
          {/* //// CHILDREN //// */}
          {children}
        </Main>
        {/* /// drawer body /// */}
        <Drawer anchor="left" open={showSmDrawer}>
          <div className={`${styles.smDrawerContainer}`}>
            {/* /// absolute icon /// */}
            <div className={`${styles.absoluteSection}`}>
              <span onClick={() => setShowSmDrawer(false)}>
                <IoClose />
              </span>
            </div>
            {/* /// link section /// */}
            <div className={`${styles.smLinkSection}`}>
            <HashLink
                className="text-decoration-none text-white"
                to="/#home"
              >
                <span onClick={() => {
                  setActiveLink("Home");
                }}key={"Home"}
                disablePadding>Home</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/#hiloProgress"
              >
                <span onClick={() => {
                  setActiveLink("Sale Progress");
                }}key={"Sale Progress"}
                disablePadding>Sale Progress</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/#Game"
              >
                <span onClick={() => {
                  setActiveLink("Game");
                }}key={"Game"}
                disablePadding>Game</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/#memberBenefit"
              >
                <span onClick={() => {
                  setActiveLink("Member Benefit");
                }}key={""}
                disablePadding>Member Benefit</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/#hiloToken"
              >
                <span onClick={() => {
                  setActiveLink("HILO Token");
                }}key={"HILO Token"}
                disablePadding>HILO Token</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/#buy-hilo"
              >
                <span onClick={() => {
                  setActiveLink("How to Buy HILO Token?");
                }}key={"How to Buy HILO Token?"}
                disablePadding>How to Buy HILO Token?</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/#roadmapHilo"
              >
                <span onClick={() => {
                  setActiveLink("Roadmap");
                }}key={"Roadmap"}
                disablePadding>Roadmap</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/#team-details"
              >
                <span onClick={() => {
                  setActiveLink("Team");
                }}key={"Team"}
                disablePadding>Team</span>
              </HashLink>
              <HashLink
                className="text-decoration-none text-white"
                to="/new-to-crypto"
              >
                <span onClick={() => {
                  setActiveLink("New To Crypto?");
                }}key={"New To Crypto?"}
                disablePadding>New To Crypto?</span>
              </HashLink>
            </div>
            <div>
              <div className={`d-flex flex-column align-items-center`}>
                {/* <button>
                    <span>
                      <RiExternalLinkFill />
                    </span>
                    whitepaper
                  </button>
                  <button>CONNECT</button> */}
                <button className={styles.buttonBuy}>Buy $hilo now</button>
                <button className={styles.buttonSupport}>support</button>
              </div>
              <div className={`${styles.iconsHeader}`}>
                <img src={firstSc} alt="icon" />
                <img src={secondSc} alt="icon" />
                <img src={thirdSc} alt="icon" />
                <img src={fourthSc} alt="icon" />
                <img src={fifthSc} alt="icon" />
                <img src={sixthSc} alt="icon" />
                <img src={seventhSc} alt="icon" />
                <img src={eightSc} alt="icon" />
                <img src={ninethSc} alt="icon" />
                <img src={tenthSc} alt="icon" />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default DrawerComp;
