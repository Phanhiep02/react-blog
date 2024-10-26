import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import MainLayout from "./layouts/MainLayout";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/post/:id" element={<Post></Post>}></Route>
        </Route>
      </Routes>
    </>
  );
}
