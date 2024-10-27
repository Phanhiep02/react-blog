import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  selectAllPosts,
  selectStatus,
} from "../../redux/slice/postSlice";
import CartItem from "../../components/CartItem";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  if (status === "error") {
    return <h2>Error</h2>;
  }
  return (
    <div>
      <h1>Blog</h1>
      <Grid container spacing={2}>
        {status === "pending" ? (
          <h2>loading</h2>
        ) : (
          posts.map(({ id, title }) => (
            <Grid key={id} size={4}>
              <CartItem
                title={title}
                id={id}
                image={
                  "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
                }
              ></CartItem>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
