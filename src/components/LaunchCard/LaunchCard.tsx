import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link} from 'react-router-dom';
import { LaunchCardFragment } from "./LaunchCard.generated";

interface Props {
  launch: LaunchCardFragment
}

const LaunchCard: React.FC<Props> = ({launch}) => {
  const {mission_name, launch_date_utc, links} = launch;
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} justifyContent="center" alignItems="center" >
      <Card>
        <Link to={`/${mission_name}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={links?.mission_patch_small ?? "https://www.spacex.com/static/images/share.jpg"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {mission_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(launch_date_utc).toUTCString()}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  )
}

export default LaunchCard;