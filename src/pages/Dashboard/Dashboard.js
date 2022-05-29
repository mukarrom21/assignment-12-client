import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/my_order">My Orders</Link></li>
                    <li><Link to="/dashboard/add_review">Add A Review</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    <li><Link to="/dashboard/manage_orders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/add_product">Add A Product</Link></li>
                    <li><Link to="/dashboard/make_admin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manage_product">Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;