import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './Navbar.css';
import { FaLinkedin, FaHome, FaUser, FaSuitcase, FaCommentAlt, FaBell, FaVideo } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs'



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
                        <Nav.Link className='text-navigation' href="/">
                            <FaHome size={18} />Home</Nav.Link>

                        <Nav.Link className='text-navigation' href='/'>
                            <FaUser size={18} />Network</Nav.Link>

                        <Nav.Link className='text-navigation'>
                            <FaSuitcase size={18} />Jobs</Nav.Link>

                        <Nav.Link className='text-navigation'>
                            <FaCommentAlt size={18} />Messaging</Nav.Link>

                        <Nav.Link className='text-navigation'>
                            <FaBell size={18} />Notifications</Nav.Link>

                        <div className="text-navigation navbar-me" id="">
                            <div id="profile-pic-sm" className="profile-pic-sm">
                                <img id="profile-pic-sm" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic" />
                            </div>
                            <NavDropdown className='text-navigation' title="Me" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/me">My</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        <div className="text-navigation">
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
