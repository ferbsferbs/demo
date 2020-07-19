import React, { useState } from 'react'

function Button(props) {

    return (
        <div
                  href="#"
                  type="button"
                  className={`btn btn-pink rounded-pill  text-truncate ${props.btnClass}`}
                  style={props.style?props.style:{height:50}}
                  onClick={()=>props.onClick()}
                >
             
                  
  <p className={`btn btn-text-pink ${props.btnClassText}`} style={{padding:5}}> {props.text}</p> 
                </div>

    )
}

export default Button
