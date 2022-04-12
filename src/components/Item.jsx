import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  const { id, title, description, pictureUrl, price } = product;
  return (
    <>
      <Grid item xs={2} sm={3} md={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={pictureUrl}
              alt="random item"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                ${price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" component={Link} to={`/item/${id}`}>
              Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
