import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../../assets/img/projects/acuo.jpg'

export default function SectionCard() {

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="ACUO"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Acuo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Acuo is a app suite I'm solo-developing to help churches manage pastoral care.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="dark">
          Share
        </Button>
        <Button size="small" color="dark">
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}