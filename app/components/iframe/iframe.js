import React from 'react'

function YoutubeVideo(props) {
    return (
        
                  <div className=" embed-responsive embed-responsive-16by9 ">
            <iframe
              className="rounded-generic"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              frameborder="0"
              src={`https://www.youtube.com/embed/${props.id}`}
            />
            </div>
       
    )
}

export default YoutubeVideo
