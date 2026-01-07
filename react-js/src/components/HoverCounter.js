// this file is anthor way of Higher order componenet, it can be increment the value of enter the mouse 

import React, { Component } from 'react'
import UpdateComponent from './WithCounter'

class HoverCounter extends Component {
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
    return <h2 onMouseOver={incrementCount}>  Hover{Count} Counter </h2>
    
  }
}

export default UpdateComponent(HoverCounter)
