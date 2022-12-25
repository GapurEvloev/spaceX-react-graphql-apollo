import React from "react";
import { Typography } from "@mui/material";
import { useGetPastLaunchesQuery } from "./LaunchList.generated";

const LaunchList: React.FC = () => {
  const {data, loading, error} = useGetPastLaunchesQuery({
    variables: {
      limit: 4
    }
  });

  return (
    <section className="launches">
      <Typography variant="h2" component={"h1"} align={"center"} my={6}>
        Launches
      </Typography>
    </section>
  );
};

export default LaunchList;