import React from 'react';
import {Grid} from "@mui/material";
import ShipCard from "../../../ShipCard";
import {Ship} from "../../../types.generated";

interface Props {
  ships?: (Ship | null)[]
}

const ShipsCards: React.FC<Props> = ({ships}) => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {
        ships?.map(ship => {
          return ship && <ShipCard key={ship.id} ship={ship}/>
        })
      }
    </Grid>
  )
}

export default ShipsCards;