import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import makeSelectLandingPage from '../../selectors';
import Marker from '../../../../components/maker/marker';
import Button from '../../../../components/button/button';
import { Row, Container, Col } from 'react-bootstrap';

function MapaComments(props) {
  const [config, setConfig] = useState({
    center: {
      lat: -34.608,
      lng: -58.37,
    },
    zoom: 5,
  });
  return (
    <div className={'min-vh-100 section'}>
      <div id={props.id}>
        <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 row-cols-lg-2 m-0">
          <div className="col-lg-36 col-md-24 col-sm-12 justify-content-center ">
            <div className="col-lg-36 col-md-24 col-sm-12">
              <h2 className="heading-no-bar text-align-center  mt-5">
                colegios en vivo
              </h2>
              <p className=" sub-heading px-5 text-align-center">
                Todos los debates, información y momentos que compartimos los
                compartimos con ustedes! No te los podes perdes!
              </p>

              <div style={{ height: '35rem', width: '100%', borderRadius: 40 }}>
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
              <p className=" sub-heading px-5 text-align-center">
                Todos los debates, información y momentos que compartimos los
                compartimos con ustedes! No te los podes perdes!
              </p>
             
            
            <Container     style={{
                  height: '35rem',
                  width: '100%',
                  borderRadius: 40,
                  backgroundColor: '#009ACA',
                }}>
  <Row>
    {[0,1,2,3,4,5,6,7,8,6,4,3,2].map(e=>{
      return(
        <Col xs={11} md={2}  className="m-2"   style={{
          height: '8rem',
          
          borderRadius: 40,
          backgroundColor: '#fff',
        }}>
         
<p className="m-1">Me gustó mucho la charla con los miembros de la fundación!</p>
</Col>
      )
    })}
 
 
                
                
  </Row>
</Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaComments;
