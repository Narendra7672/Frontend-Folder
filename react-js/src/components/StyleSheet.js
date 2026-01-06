import React from 'react'
import './myStyles.css' 

function StyleSheet(props) {

  {/*  
  return (
    <div>
        <h1 className='primary'>
            hello
        </h1>
      
    </div>
  ) */}

  // using props:
  let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl`} >hello</h1>
    </div>
  )
}

export default StyleSheet
