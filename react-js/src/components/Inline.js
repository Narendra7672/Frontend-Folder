import React from 'react'
const heading={
    fontSize:'72px',
    color:'red'
}

function Inline() {
  return (
    <div>
      <h1 className='error'>Error</h1>  {/* this line use appStyles.css */}
      <h1 style={heading}>hello World</h1>
    </div>
  )
}

export default Inline
