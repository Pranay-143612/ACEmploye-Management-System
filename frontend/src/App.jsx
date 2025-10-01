import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Admin from './pages/AdminDashboard/Admin'
import Employee from './pages/EmployeeDashboard/Employee'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBasedRoutes from './utils/RoleBasedRoutes'
import DashOverview from './pages/AdminDashboard/dashboardcontent/overview/DashOverview'
import DepartmentsList from './components/departments/DepartmentsList'
import AddDepartMent from './components/departments/add departments/AddDepartMent'
import EditDepartment from './components/departments/Edit Departments/EditDepartment'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin-dashboard' element={
          <PrivateRoutes>
            <RoleBasedRoutes requiredRole={["admin"]} >
              <Admin />
            </RoleBasedRoutes>
          </PrivateRoutes>
        }>
          <Route index element={<DashOverview />}></Route>
          <Route index path='/admin-dashboard/departments' element={<DepartmentsList />}></Route>
          <Route index path='/admin-dashboard/add-department' element={<AddDepartMent />}></Route>
          <Route index path='/admin-dashboard/department/:id' element={<EditDepartment/>}></Route>
        </Route>
        <Route path='/employee-dashboard' element={<Employee />}></Route>
      </Routes>
    </>
  )
}

export default App
