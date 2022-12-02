import React from "react";
import {FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from "@mui/material";
import { useSearchParams } from "react-router-dom";

interface Props {
  items: string[]
}

const FilterDropdown: React.FC<Props> = ({items}) => {
  const [type, setType] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value);
    setSearchParams({ type: event.target.value });
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
      <Select
        labelId="select-filter"
        id="select-filter"
        value={type}
        onChange={handleChangeType}
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