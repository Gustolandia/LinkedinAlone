import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import './Profile.css';


// - POST https://striveschool.herokuapp.com/api/profile/{username}/experiences/:expId/picture
// Changes the experience picture (only if username === current user). 
// Name of the picture in the form-data: experience

// EXPERIENCE Model:
// {
//     "_id": "5d925e677360c41e0046d1f5",  //server generated
//     "role": "CTO",
//     "company": "Strive School",
//     "startDate": "2019-06-16T22:00:00.000Z",
//     "endDate": "2019-06-16T22:00:00.000Z", //could be null
//     "description": "Doing stuff here and there",
//     "area": "Berlin",
//     "username": "admin",  //server generated
//     "createdAt": "2019-09-30T19:58:31.019Z",  //server generated
//     "updatedAt": "2019-09-30T19:58:31.019Z",  //server generated
//     "__v": 0  //server generated
//     "image": ... //server generated on upload
// }   



class AddExp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:this.props.username,
            description:"",
            role:"",
            company:"",
            start:null,
            end:null,
            area:"",
            _id:null,
            data:{},
            updated:false,
            selectedFile: null,
            loading:false,
            show:false,
        };
    }


    updateRole= (e) => {this.setState({role:e.target.value})};
    updateCompany= (e) => {this.setState({company:e.target.value})};
    updateStart= (e) => {this.setState({start:e.target.value.replace(/-/g,",")})};
    updateEnd= (e) => {this.setState({end:e.target.value.replace(/-/g,",")})};
    updateArea= (e) => {this.setState({area:e.target.value})};

    update= (e) => {this.setState({description:e.target.value})}
    updatePic= (e3) => {this.setState({selectedFile:e3.target.files[0]})}
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    Updating = () => this.setState({updated:true});

    async handle(e2) {
        this.setState({loading:true,});
        let start=new Date();
        let end=new Date();
        console.log(start)
        console.log(this.state.start)
        start.setFullYear(this.state.start);
        end.setFullYear(this.state.end);
        console.log(start)
        let exp={"role":this.state.role,"description":this.state.description,"company":this.state.company,"start":start.toISOString(),"end":end.toISOString(),"area":this.state.area,};
        
        let formData= new FormData();
        formData.append("experience", this.state.selectedFile);
        let object=await fetch("https://striveschool.herokuapp.com/api/profile/"+this.state.username+"/experiences",{
            method: "POST",
            body: JSON.stringify(exp),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            })
        });
        let response=await object.json();
        console.log(response);
        let object1={ok:false}
        if (this.state.selectedFile!==null){
            object1=await fetch("https://striveschool.herokuapp.com/api/profile/"+this.state.username+"/experiences/"+response._id+"/picture",{
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
            this.setState({updated:true,loading:false, selectedFile:null, _id:response._id})
            this.props.data1(this.state.updated)}
        else{
            alert("there is a problem posting")}
        
    }
    
    render(){
        return(
            <>
                <div onClick={this.handleShow} className="editButton3 d-flex"><div className="mx-auto my-auto"><span>+ Add Experience</span></div> </div>
                <Modal className="mt-5" show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add Job Experience</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                {this.state.loading===false?
                                <div className="d-flex flex-column py-3 px-4">
                                    {this.state.selectedFile!=null && <div className="imageWrapper2 my-1"><img className="profilePic" src={URL.createObjectURL(this.state.selectedFile)} alt="something went wrong" ></img></div>} 
                                    <input className="mb-3" type="file" name="feedimages" accept="image/*" onChange={(e3)=>this.updatePic(e3)}></input> 
                                    <label className="mb-0">Role:</label>
                                        <input id="role" className="w-100 h-100 my-1 mb-2" placeholder="Your job position." value={this.state.role} onChange={(e)=>this.updateRole(e)}></input>
                                    <label className="mb-0">Company:</label>
                                        <input id="comapny" className="w-100 h-100 my-1 mb-2" placeholder="The company you work for." value={this.state.company} onChange={(e)=>this.updateCompany(e)}></input>
                                    <label className="mb-0">Start date:</label>
                                        <input id="start" className="w-100 h-100 my-1 mb-2" type="date" onChange={(e)=>this.updateStart(e)}></input>
                                    <label className="mb-0">End date:</label>
                                        <input id="end" className="w-100 h-100 my-1 mb-2" type="date" onChange={(e)=>this.updateEnd(e)}></input>
                                    <label className="mb-0">Location:</label>
                                        <input id="area" className="w-100 h-100 my-1 mb-2" placeholder="Your job location." value={this.state.area} onChange={(e)=>this.updateArea(e)}></input>
                                    <label className="mb-0">Description:</label>   
                                        <textarea id="description" className="w-100 h-100 my-1 mb-2" placeholder="Describe you job..." value={this.state.description} onChange={(e)=>this.update(e)}></textarea>
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


export default AddExp;