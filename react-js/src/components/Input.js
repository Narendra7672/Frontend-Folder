// this is child component from FocusInput.js and it can be used ref approch purpos

import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      
    }
    focusInput(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Input
