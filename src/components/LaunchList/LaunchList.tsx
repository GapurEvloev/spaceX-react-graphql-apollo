import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useGetPastLaunchesQuery } from "./LaunchList.generated";
import Spinner from "../Spinner";
import LaunchCard from "../LaunchCard/LaunchCard";

const LaunchList: React.FC = () => {
  const {data, loading, error} = useGetPastLaunchesQuery({
    variables: {
      limit: 4
    }
  });

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <Container maxWidth="lg" style={{marginBottom: "4em"}}>
      <Typography variant="h2" component={"h1"} align={"center"} my={6}>
        Launches
      </Typography>

      {loading && <Spinner/>}

      {
        data?.launchesPast && (
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {
              data.launchesPast.map((launch, index) => launch &&
                <LaunchCard key={index} launch={launch}/>
              )
            }
          </Grid>
        )
      }
    </Container>
  );
};

export default LaunchList;