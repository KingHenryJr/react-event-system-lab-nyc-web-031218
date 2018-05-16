import React from 'react';

export default class EyesOnMe extends React.Component{
  constructor(props){
    super();

    this.state = {}
  }

  eyesOn = () => {
    console.log('Hey! Eyes on me!')
  }

  focused = () => {
    console.log('Good!')
  }

  render(){
    return(
      <button onBlur={this.eyesOn} onFocus={this.focused}>Button</button>
    )
  }

}
