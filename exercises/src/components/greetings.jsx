import React, {Component} from "react";

export default class Greeting extends Component{

    
    //create to able to change the value type
    state = {
        type: this.props.type,
        name: this.props.name
    }

    
    constructor(props){
        super(props);
        this.setType = this.setType.bind(this); //this in setType represents the current component (Greeting)
    }

    setType(e){
        // console.log(e.target.value) //target = input
        // this.props.type = e.target.value; //change the value of type
        this.setState({type: e.target.value}) //able to change the value, and the component is updated
    }

    setName(e){
        this.setState({name: e.target.value}) //able to change the value, and the component is updated
    }

    render(){
        const {type, name} = this.state;
        return(
            <div>
                <h1>{type} {name}!</h1>
                <hr />
                <input type="text" placeholder="Type..." 
                value={type} onChange={this.setType}></input>
                <input type="text" placeholder="Name..." 
                value={name} onChange={e => this.setName(e)}></input>
            </div>
        )
    }
}