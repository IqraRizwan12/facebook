import { hover } from "@testing-library/user-event/dist/hover"
import { useState } from "react"

function Buttons() {

  return (
    <div className="container">
      <button style={{backgroundColor:"black",width:150}}>Like</button>
      <button style={{backgroundColor:"black",width:150}}>Comment</button>
      <button style={{backgroundColor:"black",width:150}}>Share</button>
      
    </div>


  )
}

export default Buttons