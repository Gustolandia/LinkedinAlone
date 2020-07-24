import React, {Component} from "react";
import {} from "react-bootstrap";
import './Profile.css';
import {Link} from 'react-router-dom';



class FeedInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:this.props.username,
            data:{},
        };
    }

    async componentDidMount() {

        let object=await fetch("http://localhost:3004/profile/"+this.state.username,{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        console.log(received)
        this.setState({data:received[0]})
    }
    
    
    render(){
        return(
            this.state.data!=null?
            <div className="row">
                <div className="col-1">
                    <div className="feedimage"> 
                        {"image" in this.state.data?
                            <img className="profilePic" src={this.state.data.image} alt="Profile pic"/>
                            :
                            <img className="profilePic" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic"/>
                        }
                    </div>              
                </div>
                <div className="col-11"><h5 className="ml-3"><Link to={"/username/"+this.state.username}>{this.state.data.name} {this.state.data.surname}</Link></h5> </div>
                
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


export default FeedInfo;