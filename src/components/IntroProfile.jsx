import React, {Component} from "react";
import {Card} from "react-bootstrap";
import './Profile.css';
import {Link} from 'react-router-dom';





class IntroProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            data:{},
            classV:'IntroProfile',
        };
    }


    handleScroll =()=>{
        window.pageYOffset>80? 
        this.setState({classV:'IntroProfile2'})
        : 
        this.setState({classV:'IntroProfile'})
    }

    async componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let object=await fetch(`${process.env.REACT_APP_API_URL}/profile/me`,{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "user":localStorage.getItem("username"),
            }
        });
        let received= await object.json();
        console.log(received)
        this.setState({data:received[0]})
    }
    
    
    render(){
        return(
            this.state.data.bio!==undefined?
            <div id="introProfile" className={this.state.classV}>
                <div className="m-5">
                        <div className="p-3">
                            <Card className="netCards">
                            <Card.Body>
                                <div className="imageWrapperNet">
                                    {"image" in this.state.data?
                                        <img className="profilePic" src={this.state.data.image} alt="Profile pic"/>
                                        :
                                        <img className="profilePic" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic"/>
                                    }
                                </div>
                            <Card.Title>{this.state.data.surname}, {this.state.data.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.state.data.title}</Card.Subtitle>

                            <Link to={"/username/"+this.state.data.username}>Edit your Profile</Link>
                            </Card.Body>
                            </Card>
                        </div>
                </div>
                
            </div>
            :
            <div id="errorMessage">
                <div className="spinnerWrapper">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            
                    
        )
    }

}


export default IntroProfile;