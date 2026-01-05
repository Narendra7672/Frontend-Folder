import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello Hi🖐️❤️ '
      }
      this.clickHandler=this.clickHandler.bind(this)    //this line using arrow method
    }
    clickHandler(){
        this.setState(
            {
                message:'Good Bye👋'
            }
        )
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>submit</button>
        <button onClick={()=>this.clickHandler()}>submit</button>   {/* using construtuon arpoches */}
        <button onClick={this.clickHandler}>submit</button>          {/* using arrow line */}
        
      </div>
    )
  }
}

export default EventBind
