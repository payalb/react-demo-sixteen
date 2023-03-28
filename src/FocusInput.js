import React, { Component } from 'react'
import RefComp from './RefComp'

 class FocusInput extends Component {

    constructor(props) {
      super(props);
    
      this.parentRef= React.createRef();
    }
    
    clickHandler =()=> {
        this.parentRef.current.focusInput();
    }
  render() {
    return (
      <div>
            <RefComp ref= {this.parentRef}/>
            <button onClick = {this.clickHandler}> Click Me!</button>
      </div>
    )
  }

 componentDidMount() {

      
}

}

export default FocusInput
