import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './Navbar.css';
import { FaLinkedin, FaHome, FaUser, FaSuitcase, FaCommentAlt, FaBell, FaVideo } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import {Link} from 'react-router-dom';




class NavBar extends Component {
    render() {
        return (

            <Navbar bg="dark" expand="md" className='navBar' variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div className="navbar_logo_search">
                    <FaLinkedin className='linkedIn' />
                    <Form inline style={{ paddingLeft: "10px" }}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </div>

                <div className="spacer">
                </div>

                <div className="navbar_icons" id="icons">
                    
                    <Nav className="icon-navigation">
                        <Link to="/home" className='mx-2 text-navigation'>
                            <FaHome size={18} />Home</Link>

                        <Link to={"/network"} className='mx-2 text-navigation' >
                            <FaUser size={18} />Network</Link>

                        <Nav.Link className='text-navigation'>
                            <FaSuitcase size={18} />Jobs</Nav.Link>

                        <Nav.Link className='text-navigation'>
                            <FaCommentAlt size={18} />Messaging</Nav.Link>

                        <Nav.Link className='text-navigation'>
                            <FaBell size={18} />Notifications</Nav.Link>

                        <div className=" mx-2 text-navigation navbar-me pr-4" id="">
                            <div id="profile-pic-sm1" className="profile-pic-sm">
                                <img id="profile-pic-sm" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic" />
                            </div>
                            <NavDropdown className='text-navigation' title="Me" id="basic-nav-dropdown">
                                <Link to="/username/me" className="ml-4">My Profile</Link>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        <div className="mx-2 text-navigation">
                            <BsFillGrid3X3GapFill size={18} />
                            <NavDropdown title="Work" className='text-navigation' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        <Nav.Link className='text-navigation' href="/">
                            <FaVideo size={18} />Learning</Nav.Link>
                    </Nav>
                </div>
                </Navbar.Collapse>

            </Navbar >

        )
    }
}

export default NavBar;
