import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Navbar.css';
import { FaLinkedin, FaHome, FaUser } from 'react-icons/fa';
import {Link, Redirect} from 'react-router-dom';




class NavBar extends Component {
    constructor(props) {
        super(props);
    this.state = {
        redirect:false,
    }}

    async logout() {
        localStorage.clear()
        this.setState({redirect:true})
    }


    render() {
        if(this.state.redirect){
            return( 
            <>
                <Redirect to="/"/>
                <Navbar bg="dark" expand="md" className='navBar' variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <div className="navbar_logo_search">
                        <FaLinkedin className='linkedIn' />
                        
                    </div>

                    <div className="spacer">
                    </div>

                    <div className="navbar_icons" id="icons">
                        
                        <Nav className="icon-navigation">
                            <Link to="/home" className='mx-2 text-navigation'>
                                <FaHome size={18} />Home</Link>

                            <Link to={"/network"} className='mx-2 text-navigation' >
                                <FaUser size={18} />Network</Link>


                            <div className=" mx-2 text-navigation navbar-me pr-4" id="">
                                <div id="profile-pic-sm1" className="profile-pic-sm">
                                    <img id="profile-pic-sm" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic" />
                                </div>
                                <NavDropdown className='text-navigation' title="Me" id="basic-nav-dropdown">
                                    <Link to="/username/me" className="ml-4">My Profile</Link><br/>
                                    <Link to="/" className="ml-4" onClick={(e2)=>this.logout()}>Log out</Link>
                                    
                                </NavDropdown>
                            </div>

                        
                        </Nav>
                    </div>
                    </Navbar.Collapse>
                </Navbar >
            </>)
        }
        return (

            <Navbar bg="dark" expand="md" className='navBar' variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className="navbar_logo_search">
                    <FaLinkedin className='linkedIn' />
                    
                </div>

                <div className="spacer">
                </div>

                <div className="navbar_icons" id="icons">
                    
                    <Nav className="icon-navigation">
                        <Link to="/home" className='mx-2 text-navigation'>
                            <FaHome size={18} />Home</Link>

                        <Link to={"/network"} className='mx-2 text-navigation' >
                            <FaUser size={18} />Network</Link>


                        <div className=" mx-2 text-navigation navbar-me pr-4" id="">
                            <div id="profile-pic-sm1" className="profile-pic-sm">
                                <img id="profile-pic-sm" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic" />
                            </div>
                            <NavDropdown className='text-navigation' title="Me" id="basic-nav-dropdown">
                                <Link to="/username/me" className="ml-4">My Profile</Link> <br/>
                                <Link to="/" className="ml-4" onClick={(e2)=>this.logout()}>Log out</Link>
                                
                            </NavDropdown>
                        </div>

                      
                    </Nav>
                </div>
                </Navbar.Collapse>
            </Navbar >

        )
    }
}

export default NavBar;
