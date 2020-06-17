import React, {Component} from "react";
import {} from "react-bootstrap";
import './Profile.css';


class ExpSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:this.props.username,
            data:{},
        };
    }

    async componentDidMount() {

        let object=await fetch("https://striveschool.herokuapp.com/api/profile/"+this.state.username+"/experiences",{
            method: "GET",
            headers:{
                "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
            }
        });
        let received= await object.json();
        console.log(object)
        this.setState({data:received})
    }
    
    
    render(){
        return(
            this.state.data[0]!==undefined?
            <section className="normalElement mt-3">
                <div className="p-3">
                    <h5>Experience</h5>
                    {this.state.data.map(e=>
                    <div className="ml-5 mt-5" key={e._id}>
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
                            <h5>{e.role}</h5>
                            <p>{e.company}, {e.area}</p>
                            <p className="m-0" style={{fontWeight:"normal"}}>{e.description}</p>
                        </>}
                    </div>
                    )}
                </div>
            </section>
                
                
            :
            <div></div>
            
                    
        )
    }

}


export default ExpSection;