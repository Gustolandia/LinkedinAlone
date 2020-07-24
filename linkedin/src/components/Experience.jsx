import React, {Component} from "react";
import {} from "react-bootstrap";
import './Profile.css';
import AddExp from './AddExp';



class ExpSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:this.props.username,
            data:{},
            updated:false,
        };
    }
    Data=()=>{this.setState({updated:true,})}

    async componentDidMount() {
        let object=await fetch("http://localhost:3004/profile/"+this.state.username+"/experiences",{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        this.setState({data:received})
    }
    
    async componentDidUpdate() {
        if(this.state.username!==this.props.username || this.state.updated){
        let object=await fetch("http://localhost:3004/profile/"+this.props.username+"/experiences",{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        this.setState({data:received, username:this.props.username, updated:false})}
    }
    
    
    render(){
        return(
            this.state.data[0]!==undefined?
            <section className="normalElement mt-3">
                <div className="p-3">
                    <h5>Experience</h5>
                    {this.state.data.map(e=>
                    <div className="row ml-5 mt-5" key={e._id}>
                        {e.role===undefined?
                            <div id="errorMessage">
                                <div className="spinnerWrapper">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        :
                        <>
                        <div className="col-3">
                            {"image" in e?
                            <div className="imageWrapper3 my-1"><img className="profilePic" src={e.image} alt="something went wrong" ></img></div>
                            :
                            <div className="imageWrapper3 my-1"><img className="profilePic" src="https://www.audi.com/content/dam/ci/Fundamentals/Basics/Colours/03_Markenfarben_Elemente/Audi_Brandplattform_Colours_Element_02.png" alt="Company pic"/></div>

                        }
                        </div>
                        <div className="col-9">
                            <h5>{e.role}</h5>
                            <p>{e.company}, {e.area}</p>
                            <p className="m-0" style={{fontWeight:"normal"}}>{e.description}</p>
                        </div></>}
                    </div>
                    )}
                </div>
                {(this.state.username==="user13"||this.state.username==="me") && <AddExp username={this.state.username} data1={this.Data}/>} 
            </section>
                
                
            :
            <section className="normalElement mt-3">
                <div className="p-3">
                    <h5>Experience</h5>
                    <p>No experience available yet. </p>
                </div>
                {(this.state.username==="user13"||this.state.username==="me") && <AddExp username={this.state.username} />}
            </section>
            
                    
        )
    }

}


export default ExpSection;