//  ********* Render Props ***********
// this file is Higher order componenet it can be used reused componenet using props

import React from "react";

const UpdateComponent = OriginalComponent =>{
    class NewComponenet extends React.Component{
      constructor(props) {
      super(props)
    
      this.state = {
        Count:0
         
      }
    }
    incrementCount = () =>{
        this.setState(prevState => {
            return {Count : prevState.Count +1}
        })
    }
        render(){
            return <OriginalComponent Count={this.state.Count} incrementCount={this.incrementCount} />
        }
    }
    return NewComponenet
}
export default UpdateComponent