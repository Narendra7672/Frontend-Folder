import React from 'react'

function NameList() {
   {/*
    const names=['ravi', 'ramu', 'saikiran', 'narendra']
    const NameList=names.map(names=><h2>{names}</h2>)
    return <div>{NameList}</div>

    
        // using map function:

  return (
    <div>
        {
            names.map(names=><h2>{names}</h2>)
        }
      
    </div>
  )
    */}
    
   // prinr persons details:
   
    const persons=[
        {
            id:1,
            name:'ravi',
            age:23,
            skill:'python'
        },
        {
            id:2,
            name:'raru',
            age:25,
            skill:'java'
        },
        {
            id:3,
            name:'raju',
            age:22,
            skill:'react'
        },
        {
            id:4,
            name:'ramya',
            age:21,
            skill:'full stack'
        }                
    ]
    const personList = persons.map(person=>(
        <h2>
            {person.id} i am {person.name}. iam {person.age} years old,i know {person.skill} 
        </h2>
    ))
    return <div>{personList}</div>
}

export default NameList
