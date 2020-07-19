/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';

import { Container, Row, Col, Card } from 'react-bootstrap';
import NavbarCs from '../../components/header/header';
import {
  Main,
  Actividades,
  BibliotecaVideos,
  Agenda,
  MapaComments,
  Votacion,
  RedSocial,
  Footer,
} from './sections';
import {
  MAIN,
  ACTIVIDADES,
  BIBLIOTECA_VIDEOS,
  AGENDA,
  MAPA_COMMENTS,
  VOTACION,
  RED_SOCIAL,
  FOOTER,
} from './constants';

export function LandingPage(props) {
  useInjectReducer({ key: 'landingPage', reducer });

  return (
    <div>
      <Helmet>
        <title>LandingPage</title>
        <meta name="description" content="Pantalla Principal" />
      </Helmet>
      <NavbarCs
        sections={[
          { id: MAIN, name: MAIN },
          { id: ACTIVIDADES, name: ACTIVIDADES },
          { id: BIBLIOTECA_VIDEOS, name: BIBLIOTECA_VIDEOS },
          { id: AGENDA, name: AGENDA },
        
         
        ]}
      />
      <Main id={MAIN} />
      <Actividades history={props.history} id={ACTIVIDADES} />
      <BibliotecaVideos id={BIBLIOTECA_VIDEOS} />
      <Agenda id={AGENDA} />
      <MapaComments id={MAPA_COMMENTS} />
      <Votacion id={VOTACION} />
    {/*   <RedSocial id={RED_SOCIAL} /> */}
      <Footer id={FOOTER} />
    </div>
  );
}

LandingPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LandingPage);
