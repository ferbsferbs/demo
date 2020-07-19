import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import makeSelectLandingPage from '../../selectors';
import Marker from '../../../../components/maker/marker';
import Button from '../../../../components/button/button';
import { Row, Container, Col, Carousel } from 'react-bootstrap';

function MapaComments(props) {
  const [config, setConfig] = useState({
    center: {
      lat: -34.608,
      lng: -58.37,
    },
    zoom: 5,
  });
  return (
    <div className={'min-vh-100 '}>
      <div id={props.id} className="container-fluid">
        <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 row-cols-lg-2 m-0">
          <div className="col-lg-36 col-md-24 col-sm-12 justify-content-center ">
            <div className="col-lg-36 col-md-24 col-sm-12">
              <h2 className="heading-no-bar text-align-center  mt-5">
                colegios en vivo
              </h2>
              <p className=" sub-heading  text-align-center">
                Todos los debates, información y momentos que compartimos los
                compartimos con ustedes! No te los podes perdes!
              </p>

              <div className="map-container" style={{  width: '100%', borderRadius: 40 }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyDRwSUohZBGuqSQG4AneVoe3i3FQ9vq-yo',
                  }}
                  defaultCenter={config.center}
                  defaultZoom={config.zoom}
                >
                  <Marker lat={-34.608} lng={-58.37} text="Escuela 1" id="id" />
                  <Marker
                    lat={-31.416668}
                    lng={-64.183334}
                    text="Escula 2"
                    id="id2"
                  />
                  <Marker
                    lat={-32.950001}
                    lng={-60.666668}
                    text="Escula 3"
                    id="id2"
                  />
                  <Marker
                    lat={-25.685469}
                    lng={-54.450001}
                    text="Escula 4"
                    id="id2"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>

          <div className="col-lg-36 col-md-24 col-sm-12 justify-content-center ">
            <div className="col-lg-36 col-md-24 col-sm-12">
              <h2 className="heading-no-bar text-align-center mt-5">
                COMENTARIOS DE LOS PARTICIPANTES
              </h2>
              <p className=" sub-heading  text-align-center">
                Todos los debates, información y momentos que compartimos los
                compartimos con ustedes! No te los podes perdes!
              </p>
             
            
              <div class=" py-5 notes-container "  style={{width: '100%', borderRadius: 40 }}>
      <h2 class=" text-withe comment-header">Los comentarios de los participantes</h2>
      <ul class="ul-note ">
        {[0,0,0,0,0,0,].map(e=>{
          return(
  <li class="li-note d-none d-md-block">
          <a href="#">
            <h2>Titulo 1</h2>
            <p>Me encanta caperucita!</p>
          </a>
        </li>
          )
        })}
      
      <Carousel className=" d-md-none center" indicators={false} style={{width:200}}>
                    {[0, 0, 0, 0, 0, 0, 0, 0, 5, 5].map(e => {
                      return (
                        <Carousel.Item>
                    
                    <li class="li-note" >
          <a href="#">
            <h2>Titulo 1</h2>
            <p>Me encanta caperucita!</p>
          </a>
        </li>
                         
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>

      </ul>
      

   

                  
                  </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaComments;
