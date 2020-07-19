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
      <div className="section-content " id={props.id}>
        <div className="row mb-0  ">
          <div className=" cont-75 ">
            
            <h2  className="heading">Nuestra Agenda</h2>
            <p className=" sub-heading">Enteráte de todos los eventos de hoy y de los proximos dias</p>
          </div>
      </div>

    <Carousel className="d-none d-lg-block">
  
          {[0,0].map(e=>{
            return(
                    <Carousel.Item className="justify-content-center" >

                    <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 cont-60 mx-auto mb-5">

                    <div className=" ">
                      <AgendaCard image={image2} title="Lectura para niños de primaria "subTitle="234ty" detail="- Fernando Coorea"fecha=" Hoy, 18:30 " ></AgendaCard>
                    
                    </div>

                    <div className="">
                    <AgendaCard image={image2} title="Lectura para niños de primaria "  detail="- Fernando Coorea"fecha=" Hoy, 18:30 " ></AgendaCard>
                      
                    

                    </div>

                    <div className=" ">
                      <AgendaCard image={image2} title="Lectura para niños de primaria "  detail="- Fernando Coorea"fecha=" Hoy, 18:30 " ></AgendaCard>
                    

                      </div>

                    </div>

                    </Carousel.Item>
            )
          })}
          


</Carousel>

    </div>
  </div>
  );
}

export default Agenda;
