import React from "react";

import template0 from "../../../../assets/images/templates/template0.png";
import template1 from "../../../../assets/images/templates/template1.png";
import template2 from "../../../../assets/images/templates/template2.png";
import template3 from "../../../../assets/images/templates/template3.png";


function Carousel(props) {
  let imgs = [template0, template1, template2, template3];
  let liCarouselIndicators = imgs.map((img, index) => (
    <li data-target="#carousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
  ));

  let divCarouselItem = imgs.map((img, index) => (
    <div className={"carousel-item " + (index === 0 ? "active" : "")} id={index}>
      <center>
        <img src={img} alt="" />
      </center>
    </div>
  ));

  return (
    <div id="carousel" className="carousel slide" data-ride="carousel"  data-interval="false" >
      <ul className="carousel-indicators" id="carouselItems"> {liCarouselIndicators}</ul>
      <div className="carousel-inner">{divCarouselItem}</div>

      <a className="carousel-control-prev" href="#carousel" data-slide="prev"  onClick={(ev) => {
        props.synchChanges(getIndexActive(-1));
      }}>
        <span className="fa fa-arrow-left"></span>
      </a>
      <a className="carousel-control-next" href="#carousel" data-slide="next" onClick={(ev) => {
        props.synchChanges(getIndexActive(1));
      }}>
        <span className="fa fa-arrow-right"></span>
      </a>
    </div>
  );
}
export default Carousel;

function getIndexActive(n){
  let indexActive = parseInt(document.querySelector(".carousel-item.active").id);
  if(n > 0){
    if(indexActive == document.querySelectorAll(".carousel-item").length - 1)
      indexActive = 0;
    else 
      indexActive += n;
  } else {    
    if(indexActive == 0)
      indexActive = document.querySelectorAll(".carousel-item").length - 1;
    else 
      indexActive += n;
  }
  return indexActive;
} 