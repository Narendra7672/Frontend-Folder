// this is child component from the LifecycleA parent component 

import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name:'narendra'
      }
      console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleB getDerivedstateFromprops")
        return null
    }
    componentDidMount(){
        console.log("LifecycleB componentDidMount()")
    }

     //updating methods:
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    
  render() {
    console.log("LifecycleB render")
    return <div>LifecycleB</div>
  }
}

export default LifecycleB
