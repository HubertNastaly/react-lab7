import React from 'react'
import Employee from './Employee'

export default class Employees extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      employees: null
    }
    this.getEmployees = this.getEmployees.bind(this);
  }
  componentDidMount(){
    return this.getEmployees();
  }
  getEmployees(){
    return fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(e => this.setState({ 
        employees: e }));
  }
  render(){
    return(
      <div>
        {this.state.employees == null ? "Loading..." : 
          this.state.employees.map((employee)=>
            <Employee key={employee._id} employeeName={employee.name} age={employee.age} active={employee.isActive}/>
        )}
      </div>
    )
  }
}