import { useNavigate } from "react-router-dom"

export const columns = [
    {
        name: "S.No",
        selector: (row) => row.sno
    }, {
        name: "Department Name",
        selector: (row) => row.dep_name
    }, {
        name: "Actions",
        selector: (row) => row.action
    }
]

export const DepartmentButtons = ({_id})  => {

    const navigate = useNavigate()

    return (
        <div>
            <button style={{
                background: "green",
                padding: "8px",
                borderRadius: "4px",
                color:"#fff",
                margin: "6px"
            }}
            onClick={() => navigate(`/admin-dashboard/department/${_id}`) }
            >Edit</button>
            <button style={{
                background: "red",
                padding: "8px",
                borderRadius: "4px",
                color:"#fff",
                margin: "6px"
            }}>Delete</button>
        </div>
    )
}