import React from 'react';
//using arrow functions
const Hello=()=>{ 
    { /*return(
        <div>
            <h1>Hello every on</h1>
        </div>
    )  */}
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Every One'))          

}
export default Hello