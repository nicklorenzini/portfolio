import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { graphql } from "gatsby";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Rocket from "components/Rocket/index.js";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


export const query = graphql`
  query($slug: String!) {
    contentfulSitePost (slug: {eq: $slug}) {
      heading
      subheading
      image {
        file {
          url
        }
      }
      description {
        json
      }
    }
  }
`

const SitePosts = (props) => {
  
  const { classes, ...rest } = props;

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
        <div>
          <div className={classes.main}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                <h1>{props.data.contentfulSitePost.heading}</h1>
                <h2>{props.data.contentfulSitePost.subheading}</h2>
                <img src={props.data.contentfulSitePost.image.file.url} alt='blogpost' />
                <h3>{ documentToReactComponents(props.data.contentfulSitePost.description.json) }</h3>
</GridItem>
              </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
export default withStyles(profilePageStyle)(SitePosts);

