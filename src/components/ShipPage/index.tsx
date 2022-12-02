import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useGetPastOneShipQuery} from "./ShipPage.generated";
import {Card, CardContent, CardMedia, Typography, Container, Button, Stack} from "@mui/material";
import Spinner from "../Spinner";

const ShipPage: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const shipId: any = params.id;

  const {data, loading, error} = useGetPastOneShipQuery({
    variables: {
      shipId
    }
  })

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="lg" style={{marginBottom: "4em"}}>
      {loading && <Spinner/>}
      {/*{data?.ship && <div className="page-intro">*/}
      {/*  {data?.ship?.image && <img src={data?.ship?.image} alt="" className="page-intro__img"/>}*/}
      {/*</div>}*/}
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="540"
          image={data?.ship?.image || "https://www.spacex.com/static/images/share.jpg"}
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="h2" component="h1">
            {data?.ship?.name}
          </Typography>
          <Typography align="left" variant="subtitle1" component="p">
            Type: {data?.ship?.type}
          </Typography>
          <Typography align="left" variant="body1" component="p">
            Year built: {data?.ship?.year_built}
          </Typography>

          <Stack direction="row" spacing={2} my={3}>
            {data?.ship?.url &&
              <Button variant="outlined" href={data?.ship?.url} target="_blank">
                Open in marinetraffic
              </Button>}
            {
              <Button onClick={goBack} variant="outlined">Back</Button>
            }
          </Stack>
        </CardContent>
      </Card>
    </Container>
  )
}

export default ShipPage;