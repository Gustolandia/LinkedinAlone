import React, {Component} from "react";
import {Card} from "react-bootstrap";
import './Profile.css';
import {Link} from 'react-router-dom';
import Login from './Login';





class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            data:{},
        };
    }

    async componentDidMount() {

        let object=await fetch("http://localhost:3004/profile/",{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        console.log(received)
        this.setState({data:received})
    }
    
    
    render(){
        return(
            localStorage.getItem("accessToken")?(this.state.data[0]!==undefined?
            <div className='network my-5'>
                <div className="row m-5">
                    {this.state.data.sort(function(a, b){return 0.5 - Math.random()}).map(e=>
                        <div className="col-4 p-3" key={e._id}>
                            <Card className="netCards">
                            <Card.Body>
                                <div className="imageWrapperNet">
                                    {"image" in e?
                                        <img className="profilePic" src={e.image} alt="Profile pic"/>
                                        :
                                        <img className="profilePic" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic"/>
                                    }
                                </div>
                            <Card.Title>{e.surname}, {e.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{e.title}</Card.Subtitle>
                            <Card.Text>
                                {e.bio}
                            </Card.Text>

                            <Link to={"/username/"+e.username}>View Profile</Link>
                            </Card.Body>
                            </Card>
                        </div>
                        )}
                </div>
                
            </div>
            :
            <div id="errorMessage">
                <div className="spinnerWrapper">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
          </div>)
          :
            <Login/>
            
                    
        )
    }

}


export default Network;