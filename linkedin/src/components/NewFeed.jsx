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
        };
    }

    update= (e) => {this.setState({text:e.target.value})}
    updatePic= (e3) => {this.setState({selectedFile:e3.target.files[0]})}

    async handle(e2) {
        let text={"text":this.state.text,}
        let formData= new FormData()
        formData.append("post", this.state.selectedFile);
        console.log(formData)
        console.log(this.state.selectedFile)
        let object=await fetch("https://striveschool.herokuapp.com/api/posts/",{
            method: "POST",
            body: JSON.stringify(text),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            })
        });
        let response=await object.json();
        console.log(response)

        let object1=await fetch("https://striveschool.herokuapp.com/api/posts/"+response._id,{
            method: "POST",
            body: formData,
            headers:new Headers({
                "Content-Type": "multipart/form-data",
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            })
        });

        if(object.ok){
            this.setState({updated:true, text:"",})
            this.props.data1(this.state.updated)
            alert(response.message);}
        else{
            alert("there is a problem posting", response.message)}
        
    }
    
    
    render(){
        return(
            <section className="normalElement ml-5 mt-5">
                <div className="p-3">
                        <textarea className="w-100 h-100 mx-2" placeholder="Write something new..." value={this.state.text} onChange={(e)=>this.update(e)}></textarea>
                        <input className="mx-2" type="file" name="feedimages" accept="image/*" onChange={(e3)=>this.updatePic(e3)}></input>
                        <Button className="mx-2" onClick={(e2)=>this.handle(e2)}>Submit Comment</Button>              
                    
                </div>
            </section>
            
                    
        )
    }

}


export default NewFeed;