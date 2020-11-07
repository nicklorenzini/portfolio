import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { Link, graphql, useStaticQuery } from "gatsby"

import GridContainer from "components/Grid/GridContainer.jsx";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';





const BlogComp = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulSitePost {
      edges {
        node {
          heading
          subheading
          slug
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
  `)
  return (
      
        <div>
          <GridContainer align="center">
                {data.allContentfulSitePost.edges.map(edge =>          
                <div key={edge.node.id}>
                    <Link href={`/blog/${edge.node.slug}`}>
            <Card style={{margin:'20px', width:'300px'}} xs={12} sm={12} md={6} >
              <CardActionArea >
                <CardMedia
                  component="img"
                  image={edge.node.image.file.url}
                  title={edge.node.heading}
                  height="220"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {edge.node.heading}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {edge.node.subheading}
                  </Typography>
                </CardContent>
              </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Link>
          </div>)}
          </GridContainer>
          </div>
          
  )
}

export default BlogComp;
