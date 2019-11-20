import React from 'react'
import './Form.css'

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      age: 0,
      parentName: null,
      phoneNumber: null,
      name: null,
      email: null,
      phoneNumberValid: true,
      emailValid: true
    }
    this.ageChanged = this.ageChanged.bind(this);
    this.parentNameChanged = this.parentNameChanged.bind(this);
    this.phoneNumberChanged = this.phoneNumberChanged.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  ageChanged = (event) => this.setState({age: event.target.value});
  parentNameChanged = (event) => this.setState({parentName: event.target.value});
  phoneNumberChanged = (event) => this.setState({phoneNumber: event.target.value.toString()});
  nameChanged = (event) => this.setState({name: event.target.value});
  emailChanged = (event) => this.setState({email: event.target.value});
  
  validateData()
  {
    if(this.state.age < 18)
    {
      const phoneNumberPattern = /[0-9]{9}/;
      phoneNumberPattern.test(this.state.phoneNumber) ? this.setState({phoneNumberValid: true}) : this.setState({phoneNumberValid: false});
    }
    else
    {
      const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      emailPattern.test(this.state.email) ? this.setState({emailValid: true}) : this.setState({emailValid: false});
    }
  }
  render(){
    return(
      <form onSubmit={event => {event.preventDefault(); this.validateData()}}>
        <input name="age" type="number" placeholder="Age" onChange={this.ageChanged}></input>
        <br></br>
        {
          this.state.age < 18 ?(
          <div>
            <input name="parentName" type="text" placeholder="Parent name" onChange={this.parentChanged}></input>
            <br></br>
            <input name="parentPhoneNumber" type="text" placeholder="Parent phone number" onChange={this.phoneNumberChanged}></input>
            {!this.state.phoneNumberValid ? <label className="validationMsg">Incorrect phone number</label> : null}
            <br></br>
          </div>
          ):(
          <div>
            <input name="employeeName" type="text" placeholder="Name" onChange={this.nameChanged}></input>
            <br></br>
            <input name="email" type="text" placeholder="Email" onChange={this.emailChanged}></input>
            {!this.state.emailValid ? <label className="validationMsg">Incorrect email address</label> : null}
            <br></br>
          </div>
          )
        }
        <input name="submit" type="submit" value="Submit"/>
      </form>
    )
  }
}