import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

function HomeSharedLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default HomeSharedLayout;
