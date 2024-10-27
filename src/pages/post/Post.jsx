import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPost, selectStatus } from "../../redux/slice/postSlice";

export default function Post() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);

  const post = useSelector((state) => {
    return state.posts.post;
  });
  const status = useSelector(selectStatus);
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);
  if (status === "error") {
    return <h2>đã có lỗi xảy ra</h2>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <Box>
        <span>Post by : hoang an</span>
        <span>At: 01/01/2024</span>
      </Box>
      <p>{post.body}</p>

      <Link to="/">quay lai</Link>
    </>
  );
}
