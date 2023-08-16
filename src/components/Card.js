import React from 'react'

function Card({element,index,className}) {
  return (
    <div
    
    key={index} // index for the div (0,1,2,3)
    className={className}
    style={{ height: "200px", width: "200px" }}
  >
    <p>{element.id}</p>
    <p>{element.fullName}</p>
    <p>{element.age}</p>
    <p>{element.address}</p>
  </div>
  )
}

export default Card