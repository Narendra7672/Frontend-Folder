// this method is call Higher order components, increment the value it can use as reuse the components

import React, { Component } from 'react'
import UpdateComponent from './WithCounter'

class ClickCounter extends Component {
  //  constructor(props) {
  //   super(props)
    
  //      this.state = {
  //      Count:0
         
  //      }
  //    }
  // incrementCount = () =>{
  //   this.setState(prevState => {
  //     return {Count : prevState.Count +1}
  //   })
  //  }
    
    
  render() {
    // const {Count} = this.state
    const { Count,incrementCount }=this.props
    return <button onClick={incrementCount}> Clicked {Count} time</button>
  }
}

export default UpdateComponent(ClickCounter)
