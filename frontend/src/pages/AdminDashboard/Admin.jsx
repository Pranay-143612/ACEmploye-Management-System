import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contextAPI/ContextAPI';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/dashboard/AdminSidebar';
import './admin.css';
import DashOverview from './dashboardcontent/overview/DashOverview';

function Admin() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, user, navigate]);
  

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className='main-cont'>
      <div className='header'>ACEmployee management</div>
      <div className={`admin-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
        <div className={`admin-main ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className='navbar'><h2>Welcome, {user && user.name} 👋</h2></div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Admin;
