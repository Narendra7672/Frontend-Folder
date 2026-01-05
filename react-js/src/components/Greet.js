/* import React from 'react'
 //function Greet () {
  //  return <h1>Hello World</h1>
//}
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} {props.city}</h1>
            {props.children}
        </div> 
    )       
}

export default Greet */

// using distructuring props:

/* import React from 'react'
const Greet = ({name,city}) => {
    return (
        <div>
            <h1>Hello {name} {city}</h1>
           
        </div> 
    )       
}

export default Greet */

// using function props:

import React from 'react'
const Greet = (props) => {
    const {name,city}=props
    return (
        <div>
            <h1>Hello {name} {city}</h1>
           
        </div> 
    )       
}

export default Greet