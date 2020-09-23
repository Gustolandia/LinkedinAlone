import React, { Component } from 'react'
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './login.css';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:"",
            loggedin:false,
            updated2:false,
        };
    }

    updateEmail= (e) => {this.setState({email:e.target.value})};
    updatePassword= (e) => {this.setState({password:e.target.value})};

    login = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile/login`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          }),
        })
    
        if (res.ok) {
          const json = await res.json()
          localStorage.setItem("accessToken", json.token)
          localStorage.setItem("refreshToken", json.refreshToken)
          localStorage.setItem("username", this.state.email)
          this.setState({loggedin:true, updated2:true,})
          this.props.data1(this.state.updated2)
        }
      }
    
    render() {
        return (
            <section className="login mt-3">
                <label className="mb-0 w-75 ml-3">Email:</label>
                    <input id="email" type="email" className="w-75 h-100 my-1 mb-2" placeholder="Your Email." value={this.state.email} onChange={(e)=>this.updateEmail(e)}></input>
                <label className="mb-0 w-75">Password:</label>
                    <input id="password" type="password" className="w-75 h-100 my-1 mb-2" placeholder="Your Password." value={this.state.password} onChange={(e)=>this.updatePassword(e)}></input>
                <div className="">
                    <Button className="ml-auto" onClick={()=>this.login()}>Login</Button>
                </div>
                <div>
                    <Link to="/create">Create a new account</Link>
                </div>
            </section>
        )
    }
}
