import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count:0
      }
    }
    incrementCount = ()=>{
        this.setState(prevState =>{
            return {Count:prevState.Count+1}
        })
    }
    
  render() {
    const{Count} = this.state
    return <button onClick={this.incrementCount}>Clicked {Count} Times</button>
  }
}

export default ClickCounterTwo
