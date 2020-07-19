import React from 'react';
import backgroundImage from '../../../../images/polygon.png';
import Button from '../../../../components/button/button';
import { AGENDA } from '../../constants';
function Main(props) {
  return (
    <div
      className={'min-vh-90 section '}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionX: -800,
        backgroundPositionY: -1700,
        backgroundRepeat: 'no-repeat',
        
      }}
    >
      <div className="section-content container-fluid " id={props.id}>
        <div className="row mt-lg-5 ">
          <div className="col-xs-5 col-md-7 col-lg-6  ">
            <div className="col-md-11 mb-5" >
              <h1 className="text-white serif text-uppercase mb-4">
                Descubrí la maratón de lectura
              </h1>
              <p className="text-white mb-5 mr-4 sub-heading">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis sint alias, 
              </p>
              <p >
          <Button  text={"Entrar a una charla"}></Button>
              </p>
            </div>
          </div>
         
          <div className="col-xs-5 col-md-7 col-lg-5 m-6">
            <div className=" embed-responsive embed-responsive-16by9">
            <iframe
              className="rounded-generic"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              frameborder="0"
              src="https://www.youtube.com/embed/oW8y7_qBMtw"
            />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
