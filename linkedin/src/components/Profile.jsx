import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './Profile.css';
import ExpSection from './Experience'



class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:this.props.match.params.username,
            data:{},
        };
    }

    async componentDidMount() {

        let object=await fetch("https://striveschool.herokuapp.com/api/profile/"+this.state.username,{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        this.setState({data:received})
    }
    
    
    render(){
        // console.log(this.state.data)
        return(
            this.state.data!=null?
            <div className='my-3' id="mainPage">
                
                <section className="normalElement my-3 py-3">
                    <div id="bckDiv">
                        <img id='bckimage' alt='' src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"></img>
                    </div>
                    <div className="d-flex flex-row" style={{height:"75px"}}>
                        <div id="imageWrapper" className="">
                            <img id="profilePic" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic"/>
                        </div>
                        <div id="editWrapper" className="ml-auto d-flex flex-row">
                            <div className="my-3">  
                                <Button>Message</Button>
                            </div>  

                            <div className="m-3">  
                                <Button variant="light">More...</Button>
                            </div>  
                        </div>
                    </div>
                    <div>
                        <h3 className="ml-3">{this.state.data.name+" "+this.state.data.surname}</h3>
                        <h5 style={{fontWeight:"normal"}} className="ml-3">{this.state.data.title}</h5>
                        <p style={{fontWeight:"normal"}} className="ml-3">{this.state.data.area} &#183; <a style={{fontWeight:"bold"}} href="/">Contact info</a> </p>
                    </div>
                </section>
                <section className="normalElement">
                    <div className="p-3">
                        <h5>About</h5>
                        <p className="m-0" style={{fontWeight:"normal"}} >{this.state.data.bio}</p>
                    </div>
                </section>
                <ExpSection username={this.state.username}/>
                
            </div>
            :
            <div id="errorMessage"><h1>Invalid Profile!</h1></div>
            
                    
        )
    }

}


export default MainPage;