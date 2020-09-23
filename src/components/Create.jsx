import React, { Component } from 'react'
import {Button} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import './create.css';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:"",
            name:"",
            surname:"",
            title:"",
            area:"",
            bio:"",
            solved:null
        };
    }

    updateEmail= (e) => {this.setState({email:e.target.value})};
    updatePassword= (e) => {this.setState({password:e.target.value})};
    updateName= (e) => {this.setState({name:e.target.value})};
    updateSurname= (e) => {this.setState({surname:e.target.value})};
    updateTitle= (e) => {this.setState({title:e.target.value})};
    updateArea= (e) => {this.setState({area:e.target.value})};
    updateBio= (e) => {this.setState({bio:e.target.value})};

    create = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            title: this.state.title,
            area: this.state.area,
            bio: this.state.bio,
          }),
        })
        if (res.ok){this.setState({solved:true})}  
      }
    
    render()
        { if (this.state.solved) {
        return <Redirect to="/" />
        } else{
        return (
            <section className="logon mt-3">
                <label className="mb-0 w-75 ml-3">Email:</label>
                    <input minlength="7" id="email" type="email" className="w-75 h-100 my-1 mb-2" placeholder="Your Email." value={this.state.email} onChange={(e)=>this.updateEmail(e)}></input>
                <label className="mb-0 w-75">Password:</label>
                    <input minlength="7" id="password" type="password" className="w-75 h-100 my-1 mb-2" placeholder="Your Password." value={this.state.password} onChange={(e)=>this.updatePassword(e)}></input>
                <label className="mb-0 w-75">Name:</label>
                    <input minlength="7" id="name" type="text" className="w-75 h-100 my-1 mb-2" placeholder="Your Name." value={this.state.name} onChange={(e)=>this.updateName(e)}></input>
                <label className="mb-0 w-75">Surname:</label>
                    <input minlength="7" id="surname" type="text" className="w-75 h-100 my-1 mb-2" placeholder="Your Surname." value={this.state.surname} onChange={(e)=>this.updateSurname(e)}></input>
                <label className="mb-0 w-75">Title:</label>
                    <input minlength="7" id="title" type="text" className="w-75 h-100 my-1 mb-2" placeholder="Your Title." value={this.state.title} onChange={(e)=>this.updateTitle(e)}></input>
                <label className="mb-0 w-75">Current Location:</label>
                    <input minlength="7" id="area" type="text" className="w-75 h-100 my-1 mb-2" placeholder="Your Location." value={this.state.area} onChange={(e)=>this.updateArea(e)}></input>
                <label className="mb-0 w-75">Bio:</label>
                    <textarea minlength="7" id="bio" type="text" className="w-75 h-100 my-1 mb-2" placeholder="Tell us something about yourself." value={this.state.bio} onChange={(e)=>this.updateBio(e)}></textarea>

                <div className="">
                    <Button className="ml-auto" onClick={()=>this.create()}>Create Account</Button>
                </div>
            </section>
        )}
    }
}