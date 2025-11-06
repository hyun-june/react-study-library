import { Outlet } from "react-router";
import Header from "./Header";

const Applayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Applayout;
