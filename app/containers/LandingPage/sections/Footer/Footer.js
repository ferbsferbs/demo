import React from 'react'

function Footer(props) {
    return (
        <div className={"section"}>
        <div className="section-content section-dark" id={props.id} >
        <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="row mb-5">
              <div class="col-12">
                <h3 class="footer-heading mb-4">Sobre Nosotros</h3>
                <p>
                 La maratón de lectura 2020 se realiza de manera digital con las ultimas tecnologías
                </p>
              </div>
            </div>
          </div>
          </div>
      </div>
        </div>
      </div>
    )
}

export default Footer
