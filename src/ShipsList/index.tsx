import React from 'react';
import {Box, Tabs, Tab, Typography} from "@mui/material";
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import ViewComfyAltRoundedIcon from '@mui/icons-material/ViewComfyAltRounded';
import {useGetPastShipsQuery} from "./ShipsList.generated";
import ShipsCards from "./components/ShipsCards";
import ShipsTable from "./components/ShipsTable";

const ShipsList: React.FC = () => {
  const [shipsView, setShipsView] = React.useState(0);
  const {data, loading, error,refetch} = useGetPastShipsQuery({
    variables: {
      limit: 9
    }
  });

  const handleChangeView = (event: React.SyntheticEvent, newValue: number) => {
    setShipsView(newValue);
    refetch()
  };

  return (
    <>
      <Typography variant="h2" component={"h1"} align={"center"} my={6}>
        Ships
      </Typography>
      <Box sx={{ width: '100%' }} my={4}>
        <Tabs value={shipsView} onChange={handleChangeView} textColor="secondary" indicatorColor="secondary" aria-label="icon tabs example">
          <Tab icon={<ListAltRoundedIcon fontSize={"medium"}/>} aria-label="list"/>
          <Tab icon={<ViewComfyAltRoundedIcon fontSize={"medium"}/>} aria-label="gallery"/>
        </Tabs>
      </Box>
      {error && <p className={"error"}>{error.message}</p>}
      {
        loading ? <p className={"caption"}>Loading...</p> :
        (
          data?.ships && (
            shipsView === 1 ?
              <ShipsCards ships={data?.ships} /> :
              <ShipsTable ships={data?.ships} />
          )
        )
      }
    </>
  )
}

export default ShipsList;
