import React from 'react';
import img1 from './../../../../images/mockAPI/contentagenda.jpg';
import { Card, CardDeck } from 'react-bootstrap';
import Button from '../../../../components/button/button';
function Actividades(props) {
  return (
    <div className={'min-vh-100 '}>
      <div className="section-content container " id={props.id}>
        <div className="row mb-5">
          <div className="col-md-7">
            <h2 className="heading">¿Qué podes encontrar?</h2>
            <p className=" sub-heading">Todas lo que podes hacer en nuestra Web</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-4 ">
          {[1, 2, 3, 1, 4, 5, 3, 2].map(e => {
            
            return (
              <div className="col mt-5 ">
                <Card
                  
                  style={{  borderRadius: 30 }}
                  className="rounded-generic drop-shadow"
                >
                  <Card.Img
                  
                    variant="top"
                    src={img1}
                    style={{
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    }}
                  />
                  <Card.Body style={{}}>
                    <Card.Title className="heading-card" >Escribí con Fer C.</Card.Title>
                 <Card.Text className="sub-heading">
Una descripción de lo que se va hacer en esta actividad
                    </Card.Text>
                    <Button btnClass="drop-shadow-btn  btn-block truncated" text="Ver Detalles "></Button>
                    
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Actividades;
