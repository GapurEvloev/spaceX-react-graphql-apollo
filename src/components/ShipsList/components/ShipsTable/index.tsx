import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Tooltip, Button, Link, Paper, } from "@mui/material";
import {Ship} from "../../../../types.generated";

interface Props {
  ships?: (Ship | null)[]
}

const ShipsTable: React.FC<Props> = ({ships}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            ships?.map((ship) => (
              <TableRow
                key={ship?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <RouterLink to={`ship/${ship?.id}`}>
                    {ship?.name}
                  </RouterLink>
                </TableCell>
                <TableCell align="right">{ship?.type}</TableCell>
                <TableCell align="right">
                  {ship?.image && <Tooltip
                    title={
                      <img
                        src={ship?.image}
                        width={240}
                        alt=""
                      />
                    }
                    placement="top-end"
                  >
                    <Button>Image</Button>
                  </Tooltip>}
                </TableCell>
                <TableCell align="right">
                  {ship?.url && <Link href={ship?.url} target="_blank">
                    Open in marinetraffic
                  </Link>}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ShipsTable;