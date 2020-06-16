import React, {Component} from "react";
import {Spinner, Card} from "react-bootstrap";
import './Profile.css';
import {Link} from 'react-router-dom';




class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            data:{},
        };
    }

    async componentDidMount() {

        let object=await fetch("https://striveschool.herokuapp.com/api/profile/",{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        this.setState({data:received})
    }
    
    
    render(){
        return(
            this.state.data[0]!==undefined?
            <div className='my-5'>
                <div className="row m-5">
                    {this.state.data.map(e=>
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
          </div>
            
                    
        )
    }

}


export default Network;