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
        };
    }

    update= (e) => {this.setState({text:e.target.value})}

    async handle(e2) {
        let text={"text":this.state.text};
        let object=await fetch("https://striveschool.herokuapp.com/api/posts/",{
            method: "POST",
            body: JSON.stringify(text),
            headers:new Headers({
                "Content-Type": "application/json",
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            })
        });
        if(object.ok){
            this.setState({updated:true, text:"",})
            this.props.data1(this.state.updated)}
        else{
            console.log("there is a problem posting")}
        
    }
    
    
    render(){
        return(
            <section className="normalElement ml-5 mt-5">
                <div className="p-3">
                    <textarea className="w-100 h-100 mx-2" placeholder="Write something new..." value={this.state.text} onChange={(e)=>this.update(e)}></textarea>
                    <Button className="mx-2" onClick={()=>this.handle()}>Submit Comment</Button>
                </div>
            </section>
            
                    
        )
    }

}


export default NewFeed;