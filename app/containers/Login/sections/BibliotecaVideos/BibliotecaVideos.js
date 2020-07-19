import React from 'react'
import { Card, Carousel } from 'react-bootstrap';
import Button from '../../../../components/button/button';
import YoutubeVideo from '../../../../components/iframe/iframe';

function BibliotecaVideos(props) {
    return (
      <div className={'min-vh-100 '}>
      <div className="margin-10" id={props.id}>
        <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 row-cols-lg-2 m-0">
          <div className="col-lg-36 col-md-24 col-sm-12 justify-content-center mt-5">
            <div className="col-lg-36 col-md-24 col-sm-12">

       
            <h2 className="heading-no-bar text-align-center ">Nuestros Videos</h2>
            <p className=" sub-heading mt-5 p-5 text-align-center">Todos los debates, información y momentos que compartimos los compartimos con ustedes! No te los podes perdes!</p>
            <Button btnClass="btn-yellow btn-block truncated mt-5"  btnClassText="btn-text-yellow" style={{height:50}} text="Biblioteca de Videos de la fundacion"></Button>
            <Button btnClass="btn-yellow btn-block truncated mt-3" btnClassText="btn-text-yellow" style={{height:50}} text="Videos de la Maratón"></Button>
            </div>
          </div>

          <div >
          <Carousel className="col-19 col-sm-15 col-md-19 col-lg-10" >
          <Carousel.Item>
  <div className="mt-5 ">
  <YoutubeVideo id="/Z4NfzOM8JAI"></YoutubeVideo>
           </div>
  </Carousel.Item>

  <Carousel.Item>
  <div className="mt-5">
  <YoutubeVideo id="/KM35YqcJuOg"></YoutubeVideo>
           </div>
  </Carousel.Item>
              
  <Carousel.Item>
  <div className="mt-5">
  <YoutubeVideo id="qP1GZxzQFMY"></YoutubeVideo>
           </div>
  </Carousel.Item>
</Carousel>
          </div>

        </div>
      </div>
    </div>
    )
}

export default BibliotecaVideos
