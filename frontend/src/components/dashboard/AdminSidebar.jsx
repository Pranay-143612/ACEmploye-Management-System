import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars, faUsers, faBuilding, faCalendarCheck, faMoneyBill, faGear, faTableColumns, faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import './adminsidebar.css';

function AdminSidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {isOpen && <h2>ACE Engineering College</h2>}
            </div>
            <div className="sidebar-contents">
                <NavLink to="/admin-dashboard" 
                className={({ isActive }) => (isActive ? 'active-btn' : '')}
                end
                title='Dashboard'>
                    <FontAwesomeIcon icon={faTableColumns} />
                    {isOpen && <span>Dashboard</span>}
                </NavLink>
                <NavLink to="/admin-employees" 
                className={({ isActive }) => (isActive ? 'active-btn' : '')}
                title='Employees'>
                    <FontAwesomeIcon icon={faUsers} />
                    {isOpen && <span>Employees</span>}
                </NavLink>
                <NavLink to="/admin-dashboard/departments" 
                className={({ isActive }) => (isActive ? 'active-btn' : '')}
                title='Departments'>
                    <FontAwesomeIcon icon={faBuilding} />
                    {isOpen && <span>Departments</span>}
                </NavLink>
                <NavLink to="/admin-leaves" 
                className={({ isActive }) => (isActive ? 'active-btn' : '')}
                title='Leaves'>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    {isOpen && <span>Leaves</span>}
                </NavLink>
                <NavLink to="/admin-salary" 
                className={({ isActive }) => (isActive ? 'active-btn' : '')}
                title='salary'>
                    <FontAwesomeIcon icon={faMoneyBill} />
                    {isOpen && <span>Salary</span>}
                </NavLink>
                <NavLink to="/admin-settings" 
                className={({ isActive }) => (isActive ? 'active-btn' : '')}
                title='Settings'>
                    <FontAwesomeIcon icon={faGear} />
                    {isOpen && <span>Settings</span>}
                </NavLink>
                <div className='logout'>
                    <button>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span>logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;
