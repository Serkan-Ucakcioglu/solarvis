import React from "react";
import Admin from "../Components/Admin/Admin";
import SideBar from "../Components/Admin/SideBar";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div className="flex">
      <Admin />
      <div className="w-full p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
