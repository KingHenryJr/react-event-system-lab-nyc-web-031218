import React from 'react';

  export default class Keypad extends React.Component {
    constructor(props){
      super();

      this.state ={}
    }

    entering = () => {
      console.log('Entering password...')
    }

  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.entering}/>
      </div>
    )
  }

}
