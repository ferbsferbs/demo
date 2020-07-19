import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p{
    font-family: "Oswald", sans-serif;
  }
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  :root {
    --off-white: #fafafa;
  }
  .nav {
    background-color: var(--off-white);
    position: sticky;
    top: 0px;
    width: 100%;
    height: 80px;
    z-index: 1000;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  }
  
  .nav-logo {
    height: 60px;
    width: 60px;
  }
  
  .nav-logo:hover {
    cursor: pointer;
  }
  
  .nav .nav-content {
    max-width: 900px;
    padding: 0rem 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .center {

  
    
  }
  .nav-item {
    display: inline;
    margin-left: 2rem;
    color: #333;
  }
  
  .nav-item:hover {
    color: black;
    cursor: pointer;
  }
  
  .section {
  }
  
  .section-dark {
    background: #333;
    color: white;
  }
  
  .section-content {
   
    margin: 0 auto;
    padding: 40px;
  }
  .background-img{
    background-image: url("./images/polygon.png");
    background-position: -500px -1585px;
    background-repeat: no-repeat;
  }
  .rounded-generic{
    border-radius:2rem;
  
    
  }
  .border-color-video{
    border-radius:2rem;
    border-color: #fdbb2f;
    border-width: 5px;
  }
  .margin-10{
    margin-top:10rem;
  }
  .pointer{
    cursor: pointer;
  }
  .heading {
    color:#E60C62;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .heading-no-bar {
    color:#E60C62;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .heading-card {
    color:#E60C62;
    font-family: "Oswald", sans-serif;
    
    position: relative;
    
    
    padding-bottom: 10px;
  }
  .no-img-header{
    color:#6c757d;
    font-family: "Oswald", sans-serif;
    
    position: relative;
    
    font-size:20px;
    padding-bottom: 10px;
  }
  .detail-heading{
    color: #6c757d!important;
    font-size: 80%;
    font-weight: 400;
  }
 
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
   }
   
   .carousel-control-next-icon {
     background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
   }
 
  .sub-heading{
   color:#88808B;
   font-family: "Oswald", sans-serif;

  }
  .text-align-center{
    text-align: center;
  }
  .heading:after {
    
    content: "";
    position: absolute;
    width: 100px;
    height: 2px;
    margin-left: 100px;
    background: #009aca;
    bottom: 0;
    left: 0;
  }
.btn {
  border-width: 2px;
  border-radius: 30px;
}
.btn:active,
.btn:focus {
  outline: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.btn.btn-lg {
  padding: 10px 20px;
  font-size: 16px;
  width: 70% !important;
  background: #fdbb2f;
  border-color: #fdbb2f;
}
.btn.btn-primary {
  color: #fff;
}
.btn.btn-primary:hover,
.btn.btn-primary:focus,
.btn.btn-primary:active {
  border-color: #fdbb2f !important;
  color: #fdbb2f !important;
  background-color: transparent !important;
}
.btn.btn-pink {
  background: #ec3b81;
  border: 2px solid transparent;
  color: #fff;
}
.btn.btn-pink:hover {
  background: transparent;
  color: #fff;
  border: 2px solid #ec3b81;
}
.btn.btn-yellow {
  background: #FDBB2F;
  border: 2px solid transparent;
  color: #fff;
}
.btn.btn-yellow:hover {
  background: transparent;
  color: #fff;
  border: 2px solid #FDBB2F;
}
.btn.btn-text-yellow:hover {
  color: #FDBB2F;
}
.btn.btn-text-yellow {
  color: #fff;
}
.btn.btn-text-pink:hover {
  color: #ec3b81;
}
.btn.btn-text-pink {
  color: #fff;
}
.btn.btn-outline-primary {
  color: #009aca;
  border-color: #009aca !important;
  background-color: transparent !important;
}
.btn.btn-outline-primary:hover,
.btn.btn-outline-primary:focus,
.btn.btn-outline-primary:active {
  border-color: #009aca !important;
  color: #fff !important;
  background-color: #009aca !important;
}
.btn.btn-md {
  padding: 14px 30px;
}

@media (min-width:768px) {
  .container-fluid {width:75%!important;
       
  }
}

.cont-60{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width:768px) {
  .cont-60{
    width: 60% !important;
   
  }
}

.cont-75{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width:768px) {
  .cont-75{
    width: 75% !important;
   
  }
}



.min-vh-70 {
  min-height: 70vh!important;
}

.min-vh-90 {
  min-height: 90vh!important;
}
.min-vh-80 {
  min-height: 80vh!important;
}

.h-80{
  height:100%;
}
@media (min-width:991px) {
  .h-80{
    height:75px !important;
  }
}


.serif {
  font-family: "Oswald", sans-serif !important;
}

/* Start Notes Area css
============================================================================================ */
.notes-container {
  font-family: arial, sans-serif;
  font-size: 70%;
  
  background: #009aca;
  background-repeat: no-repeat;
  background-size: 100%;
  color: #fff;
  border-radius:2rem;
}
.text-withe {
  color: white !important;
  
}
.map-container{
  height:30rem;
}
@media (min-width:991px) {
  .map-container{
    height:40rem;
  }
}
.comment-header{
text-align:center;
font-size:20px;
}
@media (min-width:1491px) {
  .comment-header{
    text-align:center;
    font-size:35px;
    }
}
.li-note {
  float: left;
  list-style: none;
  margin-right: 1rem;
  

}
.card-preguntas{
 
}
.carrousel-item{
 
}
.ul-note {
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
.ul-note .li-note a {
  text-decoration: none;
  color: #000;
  background: #fff;
  display: block;
  border-radius:2rem;
  height: 10em;
  width: 10em;
  padding: 1em;
  -moz-box-shadow: 5px 5px 7px rgba(33, 33, 33, 1);
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  -moz-transition: -moz-transform 0.15s linear;
  -o-transition: -o-transform 0.15s linear;
  -webkit-transition: -webkit-transform 0.15s linear;
}
@media (max-width:1100px) {
  .ul-note .li-note a {
    height:8em;
    width: 8em;
    
  }
}
@media (max-width:990px) {
  .ul-note .li-note a {
    height:10em;
    width: 10em;
    
  }
}
.ul-note .li-note {
  margin: 1em;
  float: left;
}
.ul-note .li-note h2 {
  font-size: 140%;
  font-weight: bold;
  padding-bottom: 10px;
}
.ul-note .li-note p {
  font-family: "Reenie Beanie", arial, sans-serif;
  font-size: 100%;
}
.ul-note .li-note a {
  -webkit-transform: rotate(-6deg);
  -o-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
}
.ul-note .li-note:nth-child(even) a {
  -o-transform: rotate(4deg);
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  position: relative;
  top: 5px;
  background: #fff;
}
.ul-note .li-note:nth-child(3n) a {
  -o-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  position: relative;
  top: -5px;
  background: #fff;
}
.ul-note .li-note:nth-child(5n) a {
  -o-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  position: relative;
  top: -10px;
}
.ul-note .li-note a:hover,
.ul-note .li-note a:focus {
  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  -o-transform: scale(1.25);
  position: relative;
  z-index: 5;
}
ol {
  text-align: center;
}
ol .li-note {
  display: inline;
  padding-right: 1em;
}
ol .li-note a {
  color: #fff;
}

/* Card Preguntas
============================================================================================ */

.card-pregunta{
  height:120px;
  background-color:#ffffff;
  border-radius:25px;
  align-items:center ;
  display:flex;

}
.pregunta-text{
  margin:1rem;
  text-align:center;
  font-size:22px;
}

.btn-white{
  background-color: #ffffff;
    border: 2px solid transparent;
    color: #ffffff;
    width:100%;
}

.btn-text-black{
  color:#000000;
  text-align:center;
  padding:10px;
}
/* Drop Shadows
============================================================================================ */


.drop-shadow{
  -webkit-box-shadow: 5px 19px 58px -27px rgba(133,133,133,1);
  -moz-box-shadow: 5px 19px 58px -27px rgba(133,133,133,1);
  box-shadow: 5px 19px 58px -27px rgba(133,133,133,1);
}
.drop-shadow-btn{
  -webkit-box-shadow: 5px 19px 58px -27px rgba(133,133,133,1);
  -moz-box-shadow: 5px 19px 58px -27px rgba(133,133,133,1);
  box-shadow: 5px 19px 58px -27px rgba(133,133,133,1);
}
.drop-shadow-box{
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.40);
-moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.40);
box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.40);
}
`;

export default GlobalStyle;
