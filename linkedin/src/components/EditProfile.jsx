import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import './Profile.css';
import { FaPencilAlt } from 'react-icons/fa';

//  - POST https://striveschool.herokuapp.com/api/profile/{username}/picture
//     Replaces user profile picture.
//     Name of the picture in the form-data: profile

// {
//     "_id": "5d84937322b7b54d848eb41b", //server generated
//     "name": "Diego",
//     "surname": "Banovaz",
//     "email": "diego@strive.school",
//     "bio": "SW ENG",
//     "title": "COO @ Strive School",
//     "area": "Berlin",
//     "image": ..., //server generated on upload
//     "username": "admin", //server generated from Auth
//     "createdAt": "2019-09-20T08:53:07.094Z", //server generated
//     "updatedAt": "2019-09-20T09:00:46.977Z", //server generated
//     "__v": 0 //server generated


class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:this.props.username,
            bio:this.props.bio,
            name:this.props.name,
            surname:this.props.surname,
            email:this.props.email,
            title:this.props.title,
            area:this.props.area,
            updated:false,
            selectedFile:this.props.selectedFile,
            newFile:null,
            loading:false,
            show:false,
        };
    }

    update= (e) => {this.setState({bio:e.target.value})}
    updateName= (e) => {this.setState({name:e.target.value})}
    updateEmail= (e) => {this.setState({email:e.target.value})}
    updateSurname= (e) => {this.setState({surname:e.target.value})}
    updateTitle= (e) => {this.setState({title:e.target.value})}
    updateArea= (e) => {this.setState({area:e.target.value})}
    updatePic= (e3) => {this.setState({newFile:e3.target.files[0],selectedFile:URL.createObjectURL(e3.target.files[0])})}
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    Updating = () => this.setState({updated:true});

    async handle(e2) {
        this.setState({loading:true,});
        let text={"name":this.state.name, "surname":this.state.surname, "bio":this.state.bio,"email":this.state.email, "title":this.state.title, "area":this.state.area};
        let formData= new FormData();
        formData.append("profile", this.state.newFile);
        let object=await fetch("https://striveschool.herokuapp.com/api/profile/",{
            method: "PUT",
            body: JSON.stringify(text),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            })
        });
        let object1={ok:false}
        if (this.state.newFile!==null){
            object1=await fetch("https://striveschool.herokuapp.com/api/profile/"+this.state.username+"/picture",{
                method: "POST",
                body: formData,
                headers:new Headers({
                    "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
                })
            });
            let response1=await object1.json();
            console.log(response1)
        }
        if(object1.ok || object.ok){
            this.setState({updated:true,loading:false, newFile:null,})
            this.props.data1(this.state.updated)}
        else{
            alert("there is a problem posting")}
        
    }
    
    render(){
        return(
            <>
                <div onClick={this.handleShow} className="editButton2"><FaPencilAlt size={25}/></div>
                <Modal className="mt-5" show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Edit Your Profile, {this.state.name}!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                {this.state.loading===false?
                                <div className="d-flex flex-column py-3 px-4">
                                    {this.state.selectedFile!=null && <div className="imageWrapper2 my-1"><img className="profilePic" src={this.state.selectedFile} alt="something went wrong" ></img></div>} 
                                    <input className="mb-3" type="file" name="feedimages" accept="image/*" onChange={(e3)=>this.updatePic(e3)}></input> 
                                    <label className="mb-0">Name:</label>
                                        <input id="name" className="w-100 h-100 my-1 mb-2" placeholder="Your name." value={this.state.name} onChange={(e)=>this.updateName(e)}></input>
                                    <label className="mb-0">Surname:</label>
                                        <input id="surname" className="w-100 h-100 my-1 mb-2" placeholder="Your surname." value={this.state.surname} onChange={(e)=>this.updateSurname(e)}></input>
                                    <label className="mb-0">Email:</label>
                                        <input id="email" className="w-100 h-100 my-1 mb-2" type="email" placeholder="Your email." value={this.state.email} onChange={(e)=>this.updateEmail(e)}></input>
                                    <label className="mb-0">Job Title:</label>
                                        <input id="title" className="w-100 h-100 my-1 mb-2" placeholder="Your job title." value={this.state.title} onChange={(e)=>this.updateTitle(e)}></input>
                                    <label className="mb-0">Location:</label>
                                        <input id="area" className="w-100 h-100 my-1 mb-2" placeholder="Your current location." value={this.state.area} onChange={(e)=>this.updateArea(e)}></input>
                                    <label className="mb-0">Bio:</label>   
                                        <textarea id="bio" className="w-100 h-100 my-1 mb-2" placeholder="Your bio..." value={this.state.bio} onChange={(e)=>this.update(e)}></textarea>
                                    <div className="d-flex w-100">
                                        <Button className="ml-auto" onClick={(e2)=>this.handle(e2)}>Save</Button>
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
                                }
                        </Modal.Body>
                </Modal>
                </>
            
                    
        )
    }

}


export default EditProfile;