import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import './Profile.css';
import ExpSection from './Experience';
import EditProfile from './EditProfile';
import Login from './Login';




class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:this.props.match.params.username,
            data:{},
            updated:false,
            show:false,
        };
    }


Data=(e5)=>{this.setState({updated:e5});}
handleClose = () => this.setState({show:false});
handleShow = () => this.setState({show:true});

    async componentDidMount() {
        let object=await fetch(`${process.env.REACT_APP_API_URL}/profile/`+this.state.username,{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "user":localStorage.getItem("username"),
            }
        });
        let received= await object.json();
        this.setState({data:received[0],updated:true})
    }
    async componentDidUpdate() {
        if(this.props.match.params.username!==this.state.username || this.state.updated){
            let object=await fetch(`${process.env.REACT_APP_API_URL}/profile/`+this.props.match.params.username,{
                method: "GET",
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                    "user":localStorage.getItem("username"),
                }
            });
            let received= await object.json();
            this.setState({data:received[0], username:this.props.match.params.username, updated:false});
    }
    }
    
    render(){
        return(
            localStorage.getItem("accessToken")?(this.state.data!=null?
            <div className='my-3' id="mainPage">
                {this.state.data.name===undefined?
                    <div id="errorMessage"> 
                        <div className="spinnerWrapper">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                :   
                    <>
                        <section className="normalElement my-3">
                            <div id="bckDiv">
                                <img id='bckimage' alt='' src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"></img>
                            </div>
                            <div className="d-flex flex-row" style={{height:"75px"}}>
                                <div onClick={this.handleShow} className="imageWrapper">
                                    {"image" in this.state.data?
                                        <img className="profilePic" src={this.state.data.image} alt="Profile pic"/>
                                    :
                                        <img className="profilePic" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic"/>
                                    }
                                </div>
                                <Modal className="mt-5" show={this.state.show} onHide={this.handleClose}>
                                <Modal.Body>
                                    {"image" in this.state.data?
                                        <img className="w-100 h-100" src={this.state.data.image} alt="Profile pic"/>
                                    :
                                        <img className="w-100 h-100" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic"/>
                                    }
                                </Modal.Body>
                                </Modal>
                                <div id="editWrapper" className="ml-auto d-flex flex-row">
                                    <div className="my-3">  
                                        <Button>Message</Button>
                                    </div>  

                                    <div className="m-3">  
                                        <Button variant="light">More...</Button>
                                    </div>  
                                </div>
                            </div>
                            <div id="profile2">
                                <h3 className="ml-3">{this.state.data.name+" "+this.state.data.surname}</h3>
                                {this.state.data.username===localStorage.getItem("username") && 
                                <>{"image" in this.state.data? 
                                <EditProfile data1={this.Data} selectedFile={this.state.data.image} username={this.state.data.username} bio={this.state.data.bio} name={this.state.data.name} surname={this.state.data.surname} email={this.state.data.email} title={this.state.data.title} area={this.state.data.area}/>
                                : 
                                <EditProfile data1={this.Data} selectedFile={null} username={this.state.data.username} bio={this.state.data.bio} name={this.state.data.name} surname={this.state.data.surname} email={this.state.data.email} title={this.state.data.title} area={this.state.data.area}/>}</>
                                }
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
                        {this.state.username==="me"?
                            <ExpSection username={localStorage.getItem("username")}/>
                            : 
                            <ExpSection username={this.state.username}/>}
                    </>
                }
                
            </div>
            :
            <div id="errorMessage"><h1>Invalid Profile!</h1></div>)
            :
            <Login/>
            
                    
        )
    }

}


export default MainPage;