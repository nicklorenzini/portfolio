/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { CloudDownload } from "@material-ui/icons";

// React icons
import { FaBullhorn, FaLinkedin, FaRegEnvelope, FaPhoneSquareAlt, FaCode, FaFortAwesome } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

//files for download

import resumeDownload from '../../assets/files/Resume.pdf'

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/about"
          color="transparent"
          className={classes.navLink}
        >
           <FaFortAwesome /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/blog"
          color="transparent"
          className={classes.navLink}
        >
          <FaBullhorn /> Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText='Projects'
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={FaCode}
          dropdownList={[
            <Link to="https://athey-product.netlify.app/" 
            className={classes.dropdownLink}
            target="_blank">
              Product Card Component
            </Link>,
            <Link to="https://atheygiving.netlify.app/" 
            className={classes.dropdownLink}
            target="_blank">
              Credit Card Component
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={resumeDownload}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Resume
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin"
          title="Connect on LinkedIn"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/nick-lorenzini/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaLinkedin/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="email"
          title="Shoot me an email"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="mailto:nicholas.lorenzini@gmail.com"
            target="_blank"
            className={classes.navLink}
          >
            <FaRegEnvelope/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="phone"
          title="Give me a call"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="tel:503-929-8491"
            target="_blank"
            className={classes.navLink}
          >
            <FaPhoneSquareAlt/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
