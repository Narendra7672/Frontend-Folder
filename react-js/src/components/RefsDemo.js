import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      // ref approch method
      this.inputRef = React.createRef()
     // call back approch second method
      this.cbRef = null
      this.setcbRef=(element) =>{
        this.cbRef = element
      }
    
      
    }
    componentDidMount(){
        // call back 
        if(this.cbRef){
            this.cbRef.focus()
        }
        // ref approch
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref = {this.inputRef}></input>   {/*ref approch */}
        <br></br>
        <input type="text" ref = {this.setcbRef}></input>    {/* call back approch */}
        <br></br>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default RefsDemo
