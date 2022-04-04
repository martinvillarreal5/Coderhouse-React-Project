import * as React from "react";
import { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

export default memo(function Item({ title, description, pictureUrl, price }) {
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
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
});
