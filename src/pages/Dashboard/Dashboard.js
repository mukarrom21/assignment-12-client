import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../../CustomLink";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
          <h2 className="text-3xl font-bold text-purple-500">Welcome to Dashboard</h2>
        <Outlet />
        
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
          </li>
          <li>
            <CustomLink to='/dashboard/add_product'>Add a product</CustomLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
