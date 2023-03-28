import React, { Component } from 'react'

export class RefComp extends Component {

    constructor(){
        super();
        this.inputRef = React.createRef();
    }

    focusInput(){
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
        Name <input type = "text" ref= {this.inputRef}></input>
      </div>
    )
  }
}

export default RefComp
