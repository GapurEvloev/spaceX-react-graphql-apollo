import React from 'react';
import {Card, CardContent, CardMedia, Grid, Link, Typography} from "@mui/material";
import {ShipCardFragment} from "./ShipCard.generated";

interface Props {
  ship: ShipCardFragment
}

const ShipCard: React.FC<Props> = ({ship}) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} justifyContent="center" alignItems="center" >
      <Card>
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
          {ship?.url && <Link href={ship?.url} target="_blank">
            Open in marinetraffic
          </Link>}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ShipCard;