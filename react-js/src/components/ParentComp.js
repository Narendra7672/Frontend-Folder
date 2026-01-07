import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name:'pythonlife'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                Name:'pyhtonlife'
            })
        },2000)
    }
  render() {
    return (
      <div>
        parent component
        <RegComp Name={this.state.Name}/>
        <PureComp Name={this.state.Name}/>

      </div>
    )
  }
}

export default ParentComp
