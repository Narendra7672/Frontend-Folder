import React, { Component } from 'react'
import LifecycleB from './LifecycleB'   // this line is import the LifecycleB and that is child component

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name:'narendra'
      }
      console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleA getDerivedstateFromprops")
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount()")
    }

    //updating methods:
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            Name:'pythonlife'
        })
    }
    
  render() {
    console.log("LifecycleA render")
    return (
        <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
        </div>
        
     )
   }
}

export default LifecycleA
