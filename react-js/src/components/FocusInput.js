// this file is parent component from input.js and this can be use ref approch

import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    
      
    }
    clickHandler =()=>{
        this.componentRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
        
      </div>
    )
  }
}

export default FocusInput
