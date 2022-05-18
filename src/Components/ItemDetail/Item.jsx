import { Button, CardActionArea, CardActions, Grid, CardContent, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { Image } from "mui-image";

export default function Item({ product }) {
  const { id, title, description, imageUrlFront, price } = product;
  return (
    <>
      <Grid item xs={2} sm={2} md={4}>
        <Card sx={{
          boxShadow: " rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}>
          <CardActionArea>
            <Image src={imageUrlFront} alt={title} className="card-img"
              showLoading={true}
              height="18.75rem"
              fit="contain"
              bgColor="white"
              duration={1000}
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
