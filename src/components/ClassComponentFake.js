import React from "react";

export default class ClassComponentFake extends React.Component
{
    constructor(props){
        super(props)   
        this.state ={
            UserName: "Hagimaru"
        }
        // this.changeInput = this.changeInput.bind(this);
    }

    changeInput(e){
        this.setState({
            UserName: e.target.value
        })
    }
    render(){
        return(
           <div>
            <h1>User Details</h1>
            <input onChange={this.changeInput.bind(this)} className="border"  type="text"/>
            <p>Hello ! {this.state.UserName}</p>
           </div>
        )
    }
} 