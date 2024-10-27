import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CartItem({ id, title, image }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" href={`/post/${id}`}>
            xem chi tiet
          </Button> */}
          <Link to={`/post/${id}`}>xem chi tiet</Link>
        </CardActions>
      </Card>
    </>
  );
}
