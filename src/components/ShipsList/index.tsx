import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import ViewComfyAltRoundedIcon from "@mui/icons-material/ViewComfyAltRounded";
import { useGetPastShipsQuery } from "./ShipsList.generated";
import ShipsCards from "./components/ShipsCards";
import ShipsTable from "./components/ShipsTable";
import FilterDropdown from "../FilterDropdown";
import { useSearchParams } from "react-router-dom";
import { NetworkStatus } from "@apollo/client";
import { InView } from "react-intersection-observer";
import Spinner from "../Spinner";
import { SHIP_TYPES } from "../../constants/types";

const ShipsList: React.FC = () => {
  const [shipsView, setShipsView] = React.useState(0);
  const [fullyLoaded, setFullyLoaded] = React.useState(false);
  const [searchParams] = useSearchParams({});
  const typeFromParams = searchParams.get("type");

  const { data, loading, networkStatus, error, refetch, fetchMore, variables } =
    useGetPastShipsQuery({
      notifyOnNetworkStatusChange: true,
      variables: {
        offset: 0,
        limit: 9,
        find: { type: typeFromParams },
      },
    });

  const handleChangeView = (event: React.SyntheticEvent, newValue: number) => {
    setShipsView(newValue);
    refetch();
  };

  React.useEffect(() => {
    refetch({ find: { type: typeFromParams } });
  }, [typeFromParams, refetch]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Typography variant="h2" component={"h1"} align={"center"} my={6}>
        Ships
      </Typography>
      <Box display="flex" justifyContent="space-between" sx={{ width: "100%" }} my={4}>
        <Tabs
          value={shipsView}
          onChange={handleChangeView}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="icon tabs example">
          <Tab icon={<ListAltRoundedIcon fontSize={"medium"} />} aria-label="list" />
          <Tab icon={<ViewComfyAltRoundedIcon fontSize={"medium"} />} aria-label="gallery" />
        </Tabs>
        <FilterDropdown items={SHIP_TYPES} name={"type"} />
      </Box>
      {networkStatus === NetworkStatus.loading ? (
        <Spinner />
      ) : (
        data?.ships &&
        (shipsView === 1 ? <ShipsCards ships={data?.ships} /> : <ShipsTable ships={data?.ships} />)
      )}
      {data?.ships &&
        variables?.limit &&
        networkStatus !== NetworkStatus.fetchMore &&
        data?.ships?.length % variables?.limit === 0 &&
        !fullyLoaded && (
          <InView
            onChange={async (inView) => {
              if (inView) {
                const result = await fetchMore({
                  variables: {
                    offset: data?.ships?.length,
                  },
                });
                setFullyLoaded(!result?.data?.ships?.length);
              }
            }}
          />
        )}
      {loading && <Spinner />}
    </>
  );
};

export default ShipsList;
