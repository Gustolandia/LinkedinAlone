import React, {Component} from "react";
import {} from "react-bootstrap";
import './Profile.css';
import FeedInfo from './FeedInfo';
import NewFeed from './NewFeed';
import IntroProfile from './IntroProfile';

import EditFeed from './EditFeed';



class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            data:{},
            updated:false,
        };
    }

    async componentDidMount() {

        let object=await fetch("https://striveschool.herokuapp.com/api/posts/",{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        this.setState({data:received})

    }

    Data=(e5)=>{this.setState({updated:e5});}

    async componentDidUpdate() {
        if(this.state.updated===true){
            let object=await fetch("https://striveschool.herokuapp.com/api/posts/",{
                method: "GET",
                headers:{
                    "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
                }
                });
            let received= await object.json();
            this.setState({data:received,updated:false,})
        }
    }
    
    
    render(){
        console.log(this.state.data);
        return(
            this.state.data[0]!==undefined?
            (this.state.data[0].username!==undefined && <>
                <IntroProfile/>
                <section className="mt-3">
                    <div id="feedMain" className="p-3">
                        <NewFeed data1={this.Data}/>
                        {this.state.data.reverse().slice(0, 10).map(e=>
                        <div className="normalElement p-5 ml-5 mt-5" key={e._id}>
                            <FeedInfo username={e.username}/>
                            <p>{e.text}  </p>
                            {e.username==="user13" && <>{"image" in e? <EditFeed data1={this.Data} _id={e._id} text={e.text} selectedFile={e.image}/> :<EditFeed data1={this.Data} _id={e._id} text={e.text} selectedFile={null}/>} </>}
                            {"image" in e &&<div> <img className="w-100 h-100" src={e.image} alt="No upload"></img></div>}
                            <p>{e.createdAt}</p>
                        </div>
                        )}
                    </div>
                </section>
            </>)
                
                
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


export default Feed;