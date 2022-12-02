import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link} from 'react-router-dom';
import {ShipCardFragment} from "./ShipCard.generated";

interface Props {
  ship: ShipCardFragment
}

const ShipCard: React.FC<Props> = ({ship}) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} justifyContent="center" alignItems="center" >
      <Card>
        <Link to={`ship/${ship.id}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={ship?.image ?? "https://www.spacex.com/static/images/share.jpg"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {ship?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ship?.type}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  )
}

export default ShipCard;