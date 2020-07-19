import React, { useState, useEffect } from 'react';
import img1 from './../../../../images/mockAPI/contentagenda.jpg';
import { Card, CardDeck, Carousel } from 'react-bootstrap';
import Button from '../../../../components/button/button';
import ActividadCard from '../../../../components/cards/actividadCard';
import privateActions from '../../../../utils/api/privateActions/privateActions'
function Actividades(props) {
  const [ aulas , setAulas ] = useState({loading:true,data:[]})
  const getAula=()=>{
    privateActions.getAulas().then(res=>{
      console.warn(res)
      setAulas({loading:false,data:res.data})
  
      })
  }
useEffect(() => {
getAula()
},[])
  return (
    <div className={'min-vh-70 '}>
      <div className="section-content  cont-60 " id={props.id}>
        <div className="row mb-5">
          <div className="col-md-7">
            <h2 className="heading">¿Qué podes encontrar?</h2>
            <p className=" sub-heading">
              Todas lo que podes hacer en nuestra Web
            </p>
          </div>
        </div>
        {/* desktop rows */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-4">
          {aulas.data.map(e => {
            console.warn(e)
            return (
                     
                     <div className="col mt-5 w-75 d-none d-xl-block pointer" onClick={()=>props.history.push(`/video-prueba/${e._id}/${e.youtube_video}`)}>
                <ActividadCard
                  image={img1}
                  title={e.titulo}
                  subTitle={e.descripcion}
                />
              </div>
            );
          })}
        </div>
        {/* carrousel mobile */}
        <div className="d-xl-none">
          <Carousel>
            {aulas.data.map(e => {
              return (
                <Carousel.Item onClick={()=>props.history.push(`/video-prueba/${e._id}/${e.youtube_video}`)}>
                  <ActividadCard
                     

                  image={img1}
                  title={e.titulo}
                  subTitle={e.descripcion}
                  youtube={e.youtube_video}
                />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Actividades;
