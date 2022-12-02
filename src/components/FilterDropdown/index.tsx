import React from "react";
import {FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from "@mui/material";
import { useSearchParams } from "react-router-dom";

interface Props {
  items: string[]
  name: string
}

const FilterDropdown: React.FC<Props> = ({items, name}) => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const paramsValue = searchParams.get(name)
  const [filter, setFilter] = React.useState(paramsValue);

  const handleChangeFilter = (event: SelectChangeEvent) => {
    if (!event.target.value) {
      setFilter(event.target.value);
      searchParams.delete(name);
      setSearchParams(searchParams);
      return
    }
    setFilter(event.target.value);
    setSearchParams({ [name]: event.target.value });
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
      <Select
        labelId="select-filter"
        id="select-filter"
        value={filter || ""}
        onChange={handleChangeFilter}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          items.map(item => {
            return <MenuItem key={item} value={item}>{item}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}

export default FilterDropdown;