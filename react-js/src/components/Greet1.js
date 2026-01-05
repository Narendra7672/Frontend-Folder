/* import React, {Component} from 'react';
class Greet1 extends Component {
    render (){
        return <h1>Hello {this.props.name} {this.props.city} </h1>
    }
}
export default Greet1 */

//using class distructuting props

import React, {Component} from 'react';
class Greet1 extends Component {
    render (){
        const{name,city}=this.props
        // const {state1,state2}=this.state   (using state distructung)
        return(
         <h1>Hello {name} {city} </h1>
        )
    }
}
export default Greet1