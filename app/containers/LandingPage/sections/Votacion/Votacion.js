import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Button from '../../../../components/button/button';
import ButtonProgessBar from '../../../../components/button/button-progress-bar';
import PreguntaCard from '../../../../components/cards/preguntaCard';

function Votaciones(props) {
  return (
    <div className={'min-vh-100 section'}>
      <div className="section-content cont-75" id={props.id}>
        <div className="row ">
          <div className="col-md-7">
            <h2 className="heading">Votá y participá!</h2>
            <p className=" sub-heading">
              Hacé parte de nuestro equivo y de nuestra agenda
            </p>
          </div>
        </div>

        <div className="row row-cols-lg-3 ">
          <div className="col  d-none d-lg-block ">
            <PreguntaCard
              pregunta="Que libro querés leer con nosotros?"
              r1="Harry Potter"
              r2="Don Quijote"
              r3="El hombre que no podia mentir"
              r4="La rosa del rio"
            />
          </div>
          <div className="col  d-none d-lg-block">
            <PreguntaCard
              pregunta="Que libro querés leer con nosotros?"
              r1="Harry Potter"
              r2="Don Quijote"
              r3="El hombre que no podia mentir"
              r4="La rosa del rio"
            />
          </div>

          <div className="col  d-none d-lg-block">
            <PreguntaCard
              pregunta="Que libro querés leer con nosotros?"
              r1="Harry Potter"
              r2="Don Quijote"
              r3="El hombre que no podia mentir"
              r4="La rosa del rio"
            />
          </div>

          {/* carrousel mobile */}
          <div className="d-xl-none">
            <Carousel style={{ maxWidth: 430 }}>
              {[1, 2, 3, 1, 4, 5, 3, 2].map(e => {
                return (
                  <Carousel.Item>
                    <PreguntaCard
                      pregunta="Que libro querés leer con nosotros?"
                      r1="Harry Potter"
                      r2="Don Quijote"
                      r3="El hombre que no podia mentir"
                      r4="La rosa del rio"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Votaciones;
