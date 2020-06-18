import React, {Component} from "react";
import {Button} from "react-bootstrap";
import './Profile.css';



class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            data:{},
            text:"",
            updated:false,
            selectedFile:null,
            loading:false,
        };
    }

    update= (e) => {this.setState({text:e.target.value})}
    updatePic= (e3) => {this.setState({selectedFile:e3.target.files[0]})}

    async handle(e2) {
        this.setState({loading:true,});
        let text={"text":this.state.text,};
        let formData= new FormData();
        formData.append("post", this.state.selectedFile);
        console.log(formData);
        console.log(this.state.selectedFile);
        let object=await fetch("https://striveschool.herokuapp.com/api/posts/",{
            method: "POST",
            body: JSON.stringify(text),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            })
        });
        let response=await object.json();

        let object1=await fetch("https://striveschool.herokuapp.com/api/posts/"+response._id,{
            method: "POST",
            body: formData,
            headers:new Headers({
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            })
        });
        let response1=await object1.json();
        console.log(response1)

        if(object1.ok){
            this.setState({updated:true, text:"", loading:false, selectedFile:null,})
            this.props.data1(this.state.updated)}
        else{
            alert("there is a problem posting")}
        
    }
    
    
    render(){
        return(
            <section className="normalElement ml-5 mt-5">
                {this.state.loading===false?
                <div className="d-flex flex-column py-3 px-4">
                        <textarea className="w-100 h-100 my-1" placeholder="Write something new..." value={this.state.text} onChange={(e)=>this.update(e)}></textarea>
                        <div className="d-flex w-100"><input className="" type="file" name="feedimages" accept="image/*" onChange={(e3)=>this.updatePic(e3)}></input>
                        <Button className="ml-auto" onClick={(e2)=>this.handle(e2)}>Submit Comment</Button></div>
                        {this.state.selectedFile!=null && <div className="my-5 mx-4"><img className="w-100 h-100" src={URL.createObjectURL(this.state.selectedFile)} alt="something went wrong" ></img></div>}              
                    
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
            </section>
            
                    
        )
    }

}


export default NewFeed;