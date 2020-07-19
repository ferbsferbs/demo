import React from 'react'
import { Card, Carousel, Row, Col, Container } from 'react-bootstrap';
import Button from '../../../../components/button/button';
import backgroundImage from '../../../../images/video.jpg'
import YoutubeVideo from '../../../../components/iframe/iframe';
import JitsiMeetComponent from '../jitsiMeet/jitsi';
function VideoEnVivo(props) {
    return (
        <div
        className={'min-vh-100 section'}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize:'cover',
          backgroundRepeat: 'no-repeat',
          
        }}
      >
     <Container>
       <Row>
         <Col className="m-5">
         {/* <JitsiMeetComponent></JitsiMeetComponent> */}
<YoutubeVideo id={props.match.params.video}></YoutubeVideo>
         </Col>
       </Row>
     </Container>
      </div>
   
  );
}

export default VideoEnVivo;
