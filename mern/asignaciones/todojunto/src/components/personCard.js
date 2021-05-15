import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
         this.state = props.person;
    }
   
    changeBirthday = () => {   
        this.setState({age: this.state.age+1 })
       // console.log(this.state.age)
    }
    render(){
       const { person } = this.props;
       //console.log(this.props)
       const { firstName, lastName, hairColor } = person; 
        return(
            <div>
                <h1>{ lastName }, { firstName } </h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={this.changeBirthday}>Birthday Button for { firstName } { lastName }</button>
            </div>

        )
    }
}
export default PersonCard;