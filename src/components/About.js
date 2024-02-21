import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === "dark" ?  'white': 'black',
        backgroundColor: props.mode === "light" ?  'black': 'white'

    }
  return (
    <div className='container md-3' style={myStyle}>
      <h1>About US</h1>
      <p>This is free to use text analyze website.</p>
    </div>
  )
}
