// this file is child component from FRParentInput.js and it can be used 'forward Ref input' 


import React from 'react'
{/*
function FRInput() {
  return (
    <div>
        <input type='text'></input>
      
    </div>
  )
} 
  */}
const FRInput = React.forwardRef( (props,ref) =>{
    return (
    <div>
        <input type='text' ref={ref}></input>
      
    </div>
  )

} ) 

export default FRInput
