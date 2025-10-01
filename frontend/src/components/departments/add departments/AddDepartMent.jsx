import React from 'react'
import './add.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddDepartMent() {

    const [department, setDepartment] = useState({
        dep_name: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value })
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                alert("Authentication token not found.");
                return;
            }

            const response = await axios.post(
                'http://localhost:3000/api/department/add',
                department,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                navigate("/admin-dashboard/departments");
            } else {
                alert("Failed to add department. Please try again.");
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error);
            }
        }
    }

    return (
        <div className="dept-form-wrapper">
            <div className="dept-form-container">
                <div className="dept-form-card">
                    <h3 className="form-title">Add Department</h3>
                    <form className="dept-form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="dep_name">Department Name</label>
                            <input
                                type="text"
                                id="dep_name"
                                name="dep_name"
                                value={department.dep_name}
                                placeholder="Enter Department Name"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={department.description}
                                placeholder="Describe..."
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="submit-btn">Add Department</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddDepartMent
