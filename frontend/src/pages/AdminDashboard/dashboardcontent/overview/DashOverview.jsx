import React from 'react'
import './overview.css'

function DashOverview() {
  return (
    <div className='overview'>
      <div className='over-head'>
        <h1>overview</h1>
      </div>
      <div className='cards'>
        <div className='card1'>
          <h1>Total Employees</h1>
          <p>5</p>
        </div>
        <div className='card1'>
          <h1 style={{
            background: 'rgb(115, 127, 236)'
          }}>Total Departments</h1>
          <p style={{
            border: '3px solid rgb(115, 127, 236)'
          }}>5</p>
        </div>
        <div className='card1'>
          <h1 style={{
            background: 'rgb(243, 115, 215)'
          }}>Average Salary</h1>
          <p style={{
            border: '3px solid rgb(243, 115, 215)'
          }}>5</p>
        </div>
      </div>
      <div className='leave-updates'>
        <h1>Leave Updates</h1>
        <div className='leave-cards'>
          <div className="stat-card">
            <h3 className="stat-card__title">Leaves Applied</h3>
            <p className="stat-card__number">2</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__title">Leaves Approved</h3>
            <p className="stat-card__number">2</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__title">Leaves Rejected</h3>
            <p className="stat-card__number">2</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__title">Leaves Pending</h3>
            <p className="stat-card__number">2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashOverview
