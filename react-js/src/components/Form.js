import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName:'',
         Comments:'',
         Topic:'react'
      }
    }
    handlerUserNameChange=(Event)=>{
        this.setState({    
            UserName: Event.target.value  
        })
    } 
    
    handlerCommentsChange=(Event)=>{
        this.setState({
            Comments: Event.target.value
        })
    }
    handlerTopicChange=(Event)=>{
        this.setState({
            Topic: Event.target.value
        })
    }
    handleSubmit=(Event)=>{
        alert(`${this.state.UserName} ${this.state.Comments} ${this.state.Topic}`)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>  
        <div>
        
             <label>Username</label>
             <input type="text" value={this.state.UserName} onChange={this.handlerUserNameChange}/>
        </div>
        <br></br>     
        <div>
             <label>Comments</label>
             <textarea type="text" value={this.state.Comments} onChange={this.handlerCommentsChange}/>
        </div>
        <br></br>
        <div>
            <label>Topic</label>
            <select value={this.state.Topic} onChange={this.handlerTopicChange}>
                <option value="react">react</option>
                <option value="java">python</option>
                <option value="java">java</option>
            </select>
        </div>
        <br></br>
        <button type="submit">Submit</button>
         
        
         
      </form>
    )
  }
}

export default Form
