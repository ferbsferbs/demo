import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from '../../images/logo.png'
import { MAIN } from "../../containers/LandingPage/constants";
export default class NavbarCs extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };


  render() {
    return (
        <Navbar className="justify-content-center  h-80" collapseOnSelect expand="lg" sticky="top" style={{backgroundColor:'#009ACA',}}>
          <div className="container-fluid d-flex flex-row">
    <Navbar.Brand>
      <img
        src={logo}
        
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className=" justify-content-end  mr-5" id="responsive-navbar-nav">
     
    <Nav className="mr-5">
 {this.props.sections.map(e=>{
    return(
        <Nav.Link ><Link
        activeClass="active"
        to={e.id}
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
        style={{color:'white',fontSize:15,fontWeight:500}}
      >
     {e.name}
      </Link></Nav.Link>
    )
 })}
         
       

    </Nav>

  </Navbar.Collapse>
  </div>
</Navbar>



    );
  }
}