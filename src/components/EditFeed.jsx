import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import './Profile.css';
import { FaPencilAlt } from 'react-icons/fa';



class EditFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            _id:this.props._id,
            data:{},
            text:this.props.text,
            updated:false,
            selectedFile:this.props.selectedFile,
            newFile:null,
            loading:false,
            show:false,
        };
    }

    update= (e) => {this.setState({text:e.target.value})}
    updatePic= (e3) => {this.setState({newFile:e3.target.files[0],selectedFile:URL.createObjectURL(e3.target.files[0])})}
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    Updating = () => this.setState({updated:true});

    async handle(e2) {
        this.setState({loading:true,});
        let text={"text":this.state.text,};
        let formData= new FormData();
        formData.append("post", this.state.newFile);
        let object=await fetch(`${process.env.REACT_APP_API_URL}/posts/`+this.state._id,{
            method: "PUT",
            body: JSON.stringify(text),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            })
        });
        let object1={ok:false}
        if (this.state.newFile!==null){
            object1=await fetch(`${process.env.REACT_APP_API_URL}/posts/`+this.state._id+`/picture`,{
                method: "POST",
                body: formData,
                headers:new Headers({
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                })
            });

        }

        if(object1.ok || object.ok){
            this.setState({updated:true,loading:false, newFile:null,})
            this.props.data1(this.state.updated)}
        else{
            alert("there is a problem posting")}
        
    }
    async handleDelete(e2){
        let object2=await fetch(`${process.env.REACT_APP_API_URL}/posts/`+this.state._id,{
            method: "DELETE",
            headers:new Headers({
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            })
        });
        if(object2.ok){
            this.setState({show:false, updated:true,loading:false, newFile:null,});
            this.props.data1(this.state.updated);
        }
    }
    
    render(){
        return(
            <>
                <div onClick={this.handleShow} className="editButton"><FaPencilAlt size={25}/></div>
                <Modal className="mt-5" show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Edit this post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                {this.state.loading===false?
                                <div className="d-flex flex-column py-3 px-4">
                                        <textarea className="w-100 h-100 my-1" placeholder="Write something new..." value={this.state.text} onChange={(e)=>this.update(e)}></textarea>
                                        <div className="d-flex w-100">
                                            <input className="" type="file" name="feedimages" accept="image/*" onChange={(e3)=>this.updatePic(e3)}></input>
                                            <Button className="ml-auto" onClick={(e2)=>this.handle(e2)}>Save</Button>
                                            <Button className="ml-auto" variant="light" onClick={(e2)=>this.handleDelete(e2)}>Delete</Button>
                                        </div>
                                        {this.state.selectedFile!=null && <div className="my-5 mx-4"><img className="w-100 h-100" src={this.state.selectedFile} alt="something went wrong" ></img></div>}              
                                    
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


export default EditFeed;