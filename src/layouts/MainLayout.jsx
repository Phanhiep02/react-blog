import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
export default function MainLayout() {
  return (
    <Container maxWidth="lg">
      <Outlet></Outlet>
    </Container>
  );
}
