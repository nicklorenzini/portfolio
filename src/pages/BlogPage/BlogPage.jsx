import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// React icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Grid from '@material-ui/core/Grid';
import BlogComp from './blogComponent';
// @material-ui/icons


// core components


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";



class BlogPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
  
    return (
      <div>
        <Header
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{  
            height: 400,
            color: "dark"
          }}
          {...rest}
        />
          <Parallax image={require("assets/img/bg5.jpg")}>
          <div className={classes.container} style={{color:'#fff'}}>
            <GridContainer xs={12} sm={12}>
              <GridItem xs={8} sm={8} md={8}>
                <h1>Parables of a Gentile</h1>
                <h4 align="justify">
                  I don't assume to know everything, and I certainly don't want to know everything.
                  I want to inspire others and live, for in this life, I know we're called to struggle together.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
          </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <Grid container justify="center">
              <div className={classes.container}>
                <h1>
                  Latest Blog Posts
                </h1>
                <BlogComp /> 
              </div>
          </Grid>       
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(BlogPage);

