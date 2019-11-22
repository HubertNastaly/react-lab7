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
      emailValid: true,
      formValid: false,
      buttonDisabled: true
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
  
  validateData(event)
  {
    if(this.state.age < 18)
    {
      const phoneNumberPattern = /[0-9]{9}/;
      phoneNumberPattern.test(event.target.value) ? 
        this.setState({phoneNumberValid: true, buttonDisabled: false}) : 
        this.setState({phoneNumberValid: false, buttonDisabled: true});
    }
    else
    {
      const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      emailPattern.test(event.target.value) ? 
        this.setState({emailValid: true, buttonDisabled: false}) : 
        this.setState({emailValid: false, buttonDisabled: true});
    }
  }
  render(){
    return(
      <form onSubmit={event => {event.preventDefault(); this.validateData()}}>
        <input name="age" type="number" step="1" placeholder="Age" onChange={this.ageChanged}></input>
        <br></br>
        {
          this.state.age < 18 ?(
          <div>
            <input name="parentName" type="text" placeholder="Parent name" onChange={this.parentChanged}></input>
            <br></br>
            <input name="parentPhoneNumber" type="text" placeholder="Parent phone number" onChange={(event) => {this.phoneNumberChanged(event); this.validateData(event);}}></input>
            {!this.state.phoneNumberValid ? <label className="validationMsg">Incorrect phone number</label> : null}
            <br></br>
          </div>
          ):(
          <div>
            <input name="employeeName" type="text" placeholder="Name" onChange={this.nameChanged}></input>
            <br></br>
            <input name="email" type="text" placeholder="Email" onChange={(event) => {this.emailChanged(event); this.validateData(event);}}></input>
            {!this.state.emailValid ? <label className="validationMsg">Incorrect email address</label> : null}
            <br></br>
          </div>
          )
        }
        <input name="submit" type="submit" value="Submit" disabled={this.state.buttonDisabled}/>
      </form>
    )
  }
}