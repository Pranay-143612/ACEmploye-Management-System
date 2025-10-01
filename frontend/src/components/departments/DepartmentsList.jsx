import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './list.css';
import DataTable from 'react-data-table-component';
import { columns } from '../../utils/DepartmentHelper';
import axios from 'axios';
import { DepartmentButtons } from '../../utils/DepartmentHelper';

function DepartmentsList() {

    const [departments, setDepartments] = useState([]);

    useEffect(()=> {
        const fetchDepartments = async() => {
            try {
                const response = await axios.get('http://localhost:3000/api/department', {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                
                if(response.data.success) {
                    let sno = 1; 
                    const data = response.data.departments.map((dep)=> (
                        {
                            _id: dep._id,
                            sno: sno++,
                            dep_name : dep.dep_name,
                            action: <DepartmentButtons _id={dep._id}/>
                        }
                    ))
                    setDepartments(data)
                }
            } catch(error) {
                if(error.response&&!error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        }
        fetchDepartments()
    },[])

    return (
        <div className='list-main'>
            <div className='dept-list'>
                <div className='list-header'>
                    <h3>Manage Departments</h3>
                </div>
                <div className='list-navigate'>
                    <input
                        type='text'
                        placeholder='Search Departments'
                    />
                    <Link className='adder' to="/admin-dashboard/add-department">Add New Department</Link>
                </div>
                <div className='list-dept'>
                    <DataTable 
                    columns={columns}
                    data={departments}
                    />
                </div>
            </div>
        </div>
    )
}

export default DepartmentsList
