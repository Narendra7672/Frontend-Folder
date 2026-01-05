//   ** if/else condition **

// class sliped 'rce'

import React, { Component } from 'react'

class UserGreeting extends Component {
    // constructor sliped 'rconst'
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true  // if you can use true loggin and false not loggin
      }
    }
    
  render() {
    
        // using if/else method:
    if(this.state.isLoggedIn){
        return <div>Welcome To My World</div>
    } else{
        return <div>Back To My World</div>
    }
    
    {/*
    // using variable element:

    let Message
     if(this.state.isLoggedIn){
        Message=<div>Welcome to my world</div>
     } else {
        Message=<div>Back to your world</div>
     }
     return<div>{Message}</div> 


    // using ternary condition :
    return this.state.isLoggedIn ?(
        <div>Welcome to my world</div>):(
        <div>Back to your world</div>
        )
    

    // using short circut operation
    return this.state.isLoggedIn && <div>Welcome to my world</div> */}
  }
}

export default UserGreeting 

//   ** Using Element variable **

