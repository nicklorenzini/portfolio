import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// React icons
import { FaBible, FaFeatherAlt, FaUserNinja,FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Rocket from "components/Rocket/index.js";
// @material-ui/icons


// core components


import profile from "assets/img/faces/nick.jpg";



import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax medium filter image={require("assets/img/profile-bg.jpg")} />
        <Rocket/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Nick Lorenzini</h3>
                      <h6>SENIOR SOFTWARE ENGINEERING MANAGER</h6>
                      <Button justIcon link className={classes.margin5}>
                        <FaTwitter/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaInstagram/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaFacebook/>
                      </Button>
                    </div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="primary"
                  horizontal={{
                    tabsGrid: { xs: 4, sm: 4, md: 4 },
                    contentGrid: { xs: 8, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Professional Story",
                      tabIcon: FaUserNinja,
                      tabContent: (
                        <span>
                          <p>
                  I started off in development around 12, when I broke the code of an old Star Wars CD game and manipulated the graphics players would see during multiplayer games.
                  That started an eager desire to break things open and understand how they work, and what drove them to do be something worth using.  I eventually graduated early and went into the Marines, serving about 5 years Active Duty in 7 different countries.
                          </p>
                          <br />
                          <p>
                          After earning my degree while I was in the Service, I transitioned into various Defense, Homeland Security and Technology organizations for the US Government within cyber security and application development.  
                          </p>
                          <br />
                          <p>
                          In 2019, I left the US Government and since have been working for one of the nation's leading healthcare providers, leading a large greenfield application development team.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Family Life",
                      tabIcon: FaFeatherAlt,
                      tabContent: (
                        <span>
                          <p>
                            I believe being a dad and husband are probably some of the most avoided, under-discussed, poorly-followed roles we have in America.  I know I'm not totally crazy saying that, ever notice how Mother's Day is usually cause for signficant love and appreciate; whereas for many - Father's Day is a time of mourning?
                          </p>
                          <br />
                          <p>
                            I can believe I'm supposed to do a whole list of things in life, but none of them are ever going to be as important as the role of leading my family.  I've been blessed with 8 children (not a typo), and a wonderful (not to mention, also beautiful) wife.
                          </p>
                          <br />
                          <p>
                            I don't think it's too radical to say even, that majority (if not close to all) problems we face in our time are rooted in how parents are not training and preparing their children for this life ahead of them.  If each child is a gift (which they are), do we not owe it to the Giver to cherish and nurture the gift?
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "The Word",
                      tabIcon: FaBible,
                      tabContent: (
                        <span>
                          <p>
                          "Thy Word is a lamp unto my feet, and a light under my path" - Psalm 119:105                          
                          </p>
                          <br />
                          <p>
                          We're in this marathon of life (as you see folks like Paul analogize) that we have to finish; except it's not bright outside and clear weather, it's very much like running a race inside a cave that occassionally floods.
                          How fascinating is it the more we lean on God, the lighter our path is, and the brighter we can see in the cave? 
                          </p>
                          <br />
                          <p>
                          I grew up in the classic American Christian home. I didn't actually come to "know" Christ until my last mobilization in the Marines. It was then that God really started shining a light on everything I know to be true and perfect, like how He directed me to pursue Megan, and how He continues to direct my path.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              </GridContainer>
              
              {/* <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(AboutPage);
