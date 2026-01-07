import React, { Component } from 'react'

class PureComp extends Component {
  render() {
    return (
      <div>
        Hello World{this.props.Name}
        
      </div>
    )
  }
}

export default PureComp
