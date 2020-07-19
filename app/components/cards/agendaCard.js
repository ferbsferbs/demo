import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '../button/button';

function AgendaCard(props) {
  return (
    <div className="m-3 ">
      <Card style={{ borderRadius: 30 }} className="rounded-generic ">
        <Card.Img
          variant="top"
          src={props.image}
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderRadius:30
          }}
        />
        <Card.Body style={{ justifyContent: 'center', marginBottom: 10 }}>
          <Card.Title className="heading-card" style={{ fontSize: 20 }}>
            {props.title}
          </Card.Title>

          <Card.Text className={props.image==null?"no-img-header":"sub-heading"}>
            <i class="far fa-clock" />
            {props.fecha}
            {props.subTitle}
          </Card.Text>

          <Card.Text className="detail-heading">{props.detail}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AgendaCard;
