import React from 'react'

export default class Employee extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.active);
  }
  render(){
    return(
      <div style={this.props.active ? {color: 'black'} : {color: 'gray'}}>
        <p>{this.props.employeeName} {this.props.age}</p>
      </div>
    )
  }
}