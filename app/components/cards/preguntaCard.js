import React from 'react'
import { Card } from 'react-bootstrap'
import ButtonProgessBar from '../button/button-progress-bar'

function PreguntaCard(props) {
    console.warn(props)
    return (
        <Card
        style={{
          
          borderRadius: 30,
          margin: '13%',
          backgroundColor: '#009ACA',
          
        }}
        className="rounded-generic drop-shadow-box"
      >
        <Card.Body style={{}}>
          <div className="drop-shadow-box card-pregunta">
            <h4 className="pregunta-text">
           
              {props.pregunta}
            </h4>
          </div>
          <ButtonProgessBar
  btnClass="truncated mt-5"
  
  style={{ height: 50 }}
  text= {props.r1}
/>
 <ButtonProgessBar
  btnClass="truncated mt-3"
  
  style={{ height: 50 }}
  text= {props.r2}
/> <ButtonProgessBar
btnClass="truncated mt-3"

style={{ height: 50 }}
text= {props.r3}
/>
<ButtonProgessBar
  btnClass="truncated mt-3"
  
  style={{ height: 50 }}
  text= {props.r4}
/>
        </Card.Body>
      </Card>
    )
}

export default PreguntaCard
