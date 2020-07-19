import React from 'react'
import { Card } from 'react-bootstrap'

function ActividadCard(props) {
    return (
        <Card
        style={{ borderRadius: 30 }}
        className="rounded-generic drop-shadow"
      >
        <Card.Img
          variant="top"
          src={props.image}
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        />
        <Card.Body style={{}}>
          <Card.Title className="heading-card">
           {props.title}
          </Card.Title>
          <Card.Text className="sub-heading">
            {props.subTitle}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default ActividadCard
