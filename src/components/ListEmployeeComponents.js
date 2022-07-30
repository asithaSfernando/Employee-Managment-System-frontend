import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService';

const ListEmployeeComponents = () => {

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        getAllEmployees();
    },[])


    const getAllEmployees = ()=>{
        EmployeeService.getAllEmployees().then((response)=>{
           
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })

    }

    const deleteEmployee = (employeeId) =>{
        EmployeeService.deleteEmployee(employeeId).then((response)=>{
            getAllEmployees();

        }).catch(error =>{
            console.log(error)
        })
    }
    

  return (
    <div className = "container">
        <h2 className='text-center'> Employee List </h2>
        <Link to = "/add-employee" className='btn btn-primary mb-2'> Add Employee </Link>
        <table className='table table-bordered table-striped'>
            <thead>

                <th> Employee Id </th>
                <th> Employee First Name </th>
                <th> Employee Last Name </th>
                <th> Employee Email </th>
                <th> Action </th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employees=>
                        <tr key = {employees.id}>
                            <td>{employees.id}</td>
                            <td>{employees.firstName}</td>
                            <td>{employees.lastName}</td>
                            <td>{employees.emailId}</td>
                            <td> 
                                <Link className="btn btn-info" to={`/edit-employee/${employees.id}`}>Update</Link> 
                                <button className='btn btn-danger' onClick={()=>deleteEmployee(employees.id)}
                                style= {{marginLeft:'10px'}}>Delete</button>
                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents