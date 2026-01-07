// this file part of the usercontext.js

import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
class ComponenetF extends Component {
  render() {
    return (
        <UserConsumer>
            {username=>{
                return <div>Hello {username}</div>
            }

            }
        </UserConsumer>
      
    )
  }
}

export default ComponenetF
