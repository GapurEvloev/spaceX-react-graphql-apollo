import React from 'react';
import {Box, Tabs, Tab, Typography, FormControl, Select, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import ViewComfyAltRoundedIcon from '@mui/icons-material/ViewComfyAltRounded';
import {useGetPastShipsQuery} from "./ShipsList.generated";
import ShipsCards from "./components/ShipsCards";
import ShipsTable from "./components/ShipsTable";
import FilterDropdown from "../FilterDropdown";
import {useSearchParams} from "react-router-dom";

const SHIP_TYPES = ['High Speed Craft', 'Cargo', 'Tug', 'Barge'];

const ShipsList: React.FC = () => {
  const [shipsView, setShipsView] = React.useState(0);
  const [searchParams] = useSearchParams({});
  const typeFromParams = searchParams.get('type');

  console.log(typeFromParams)
  const {data, loading, error, refetch} = useGetPastShipsQuery({
    variables: {
      limit: 9,
      find: {type:typeFromParams}
    }
  });

  const handleChangeView = (event: React.SyntheticEvent, newValue: number) => {
    setShipsView(newValue);
    refetch()
  };

  React.useEffect(() => {
    refetch({find: {type: typeFromParams}})
  }, [typeFromParams]);

  return (
    <>
      <Typography variant="h2" component={"h1"} align={"center"} my={6}>
        Ships
      </Typography>
      <Box display="flex" justifyContent="space-between" sx={{ width: '100%' }} my={4}>
        <Tabs value={shipsView} onChange={handleChangeView} textColor="secondary" indicatorColor="secondary" aria-label="icon tabs example">
          <Tab icon={<ListAltRoundedIcon fontSize={"medium"}/>} aria-label="list"/>
          <Tab icon={<ViewComfyAltRoundedIcon fontSize={"medium"}/>} aria-label="gallery"/>
        </Tabs>
        <FilterDropdown items={SHIP_TYPES} />
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
