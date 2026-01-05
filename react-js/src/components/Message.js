/*import React, {Component} from 'react';
class Message extends Component {
    render (){
        return (
            <h1>
                Welcome Visitors
            </h1>
        )
    }
}
export default Message */
import React, {Component} from 'react';
class Message extends Component {
    constructor () {
        super()
        this.state={
            Message: 'Welcome Visitors'
        }
    }
    changeMessage() {
        this.setState(
            {
                Message:'thans for subscribing'
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscrib</button>
            </div>
        )
    }
}
export default Message