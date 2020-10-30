import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
//video style
import './videostyle.css';
import bgvid from '../assets/vid/paradise.mp4';

const dashboardRoutes = [];

class Nope extends React.Component {
    render() {
      const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "dark"
          }}
          {...rest}
        />
                <Parallax>
        <div className={classes.container}>
        <video className="video-background"
        style={{ height: 'auto', width: 'cover' }}
        src={bgvid}
        autoPlay
        loop
        muted
      />
        <GridContainer justify="center"
  alignItems="center">
              <GridItem xs={12} sm={12} md={6}
>
            <center>
                <h1 className={classes.title} style={{align: 'center', fontSize: 160}}>404</h1>
                <h2 className={classes.subtitle} style={{align: 'center', fontSize: 80}}>Page does not exist.</h2>
                <br />
                <Button
                  color="primary"
                  size="lg"
                  href="/"
                  rel="noopener noreferrer"
                >
                  GO HOME
                </Button>
                </center>
              </GridItem>
              </GridContainer>
              </div>
              </Parallax>
        <Footer />
      </div>
    );
        }}
  

  export default withStyles(componentsStyle)(Nope)