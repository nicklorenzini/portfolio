import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import ContactCard from 'components/ContactCard/index.tsx'


class SectionTabs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h3>What Can I Do To Help?</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} 
>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "UX Design",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter} style={{height: "150px"}}>
                          Have experience in User Experience (UX) design? Good UX is critical to any site, service or app.  
                          If you have a creative heart and want to spread your wings, here's your chance, let me know!
                          Ideal individuals will have experience creating designs (such as wireframes, visual designs, animation).
                        </p>
                      )
                    },
                    {
                      tabName: "Messages",
                      tabIcon: Chat,
                      tabContent: (
                        <p className={classes.textCenter} style={{height: "150px"}}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      )
                    },
                    {
                      tabName: "Settings",
                      tabIcon: Build,
                      tabContent: (
                        <p className={classes.textCenter} style={{height: "150px"}}>
                          think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                  Join the League
                </h3>
                <center><ContactCard /></center>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(SectionTabs);
