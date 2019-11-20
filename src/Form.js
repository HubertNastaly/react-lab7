import React from 'react'
import './Form.css'

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      age: 0
    }
    this.ageChanged = this.ageChanged.bind(this);
  }
  ageChanged(event)
  {
    this.setState({age: event.target.value});
  }
  render(){
    return(
      <form>
        <input name="age" type="number" placeholder="Age" onChange={event => this.ageChanged(event)}></input>
        <br></br>
        {
          this.state.age < 18 ?(
          <div>
            <input name="parentName" type="text" placeholder="Parent name"></input>
            <br></br>
            <input name="parentPhoneNumber" type="text" placeholder="Parent phone number"></input>
            <br></br>
          </div>
          ):(
          <div>
            <input name="employeeName" type="text" placeholder="Name"></input>
            <br></br>
            <input name="email" type="text" placeholder="Email"></input>
            <br></br>
          </div>
          )
        }
        <input name="submit" type="submit" value="Submit"/>
      </form>
    )
  }
}