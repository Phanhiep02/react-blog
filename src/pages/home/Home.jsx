import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  selectAllPosts,
  selectStatus,
} from "../../redux/slice/postSlice";
import CartItem from "../../components/CartItem";
import SearchForm from "../../components/SearchForm";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  if (status === "error") {
    return <h2>Error</h2>;
  }
  return (
    <div>
      <h1>Blog</h1>
      <SearchForm></SearchForm>
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
