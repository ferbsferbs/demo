import React from 'react';
import { Carousel } from 'react-bootstrap';
import YoutubeVideo from '../../../../components/iframe/iframe';
import Button from '../../../../components/button/button';
import AgendaCard from '../../../../components/cards/agendaCard';
import image from './../../../../images/mockAPI/Guillermo.jpg';
import image1 from './../../../../images/mockAPI/Cesar.jpg';
import image2 from './../../../../images/mockAPI/Claudia.jpg';



function Agenda(props) {
  return (
    <div className={'min-vh-100 '}>
      <div id={props.id}>
        <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 row-cols-lg-2  m-0">


        <div>
            <Carousel className="col-12 col-sm-14 col-md-10 col-lg-8  ml-lg-5  ml-sm-0">
              <Carousel.Item>
                <div className="mt-5 ">
                  <AgendaCard image={image} title="Charla de como leer y aprender con Guillero " fecha=" Hoy, 12:30 " subTitle="" buttonText="Ver Detalles"></AgendaCard>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="mt-5">
                <AgendaCard image={image1} title="Lectura de historias de terror con Cesar" fecha=" Hoy, 14:30 " buttonText="Ver Detalles"></AgendaCard>

                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="mt-5 ">
                <AgendaCard image={image2} title="Lectura para niños de primaria con Claudia piñeiro" fecha=" Hoy, 18:30 " buttonText="Ver Detalles"></AgendaCard>

                </div>
              </Carousel.Item>
            </Carousel>
          </div>


          <div className="col-lg-36 col-md-24 col-sm-12 justify-content-center mt-5">
            <div className="col-lg-36 col-md-24 col-sm-12">
              <h2 className="heading-no-bar text-align-center ">Nuestra agenda</h2>
              <p className=" sub-heading mt-5 p-5 text-align-center">
            Obtené información acerca los eventos, charlas y lecturas de hoy en nuestra agenda.
              </p>
              <Button
                btnClass="btn btn-block truncated mt-5"
                btnClassText="btn-text"
                style={{ height: 50 }}
                text="Ver Agenda Completa!"
              />
             
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Agenda;
