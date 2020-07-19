import React, { useState } from 'react'

function ButtonProgessBar(props) {

    return (
        <div
                  href="#"
                  type="button"
                  className={` btn-white rounded-pill drop-shadow-box text-truncate ${props.btnClass}`}
                  style={props.style?props.style:{height:50}}
                  onClick={()=>props.onClick()}
                >
             
                  
  <p className={` btn-text-black ${props.btnClassText}`} > {props.text}</p> 
                </div>

    )
}

export default ButtonProgessBar
