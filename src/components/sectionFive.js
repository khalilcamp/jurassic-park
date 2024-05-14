import React from "react";
import "./sectionFive.css";

import imgUm from "./assets/images/jurassic-park-ambar.webp";
import imgDois from "./assets/images/jet.png";
import imgTres from "./assets/images/rexy.jpg";
import imgQuatro from "./assets/images/Jurassic_Park_Velociraptors.webp";
import imgCinco from "./assets/images/InGenHQ.webp";

const sectionFive = () => {
  return (
    <div className="lookbook-gallery">
      <h2 className="look-hed">Galeria de fotos!</h2>
      <div className="lookbook-grid" role="region">
        <figure className="model">
          <img src={imgUm} />
          <figcaption className="model--caption">
            <h3 className="model-hed">
              <a href="#">Pedra de Ambar</a>
            </h3>
          </figcaption>
        </figure>

        <figure className="model">
          <img src={imgDois} />
          <figcaption className="model--caption">
            <h3 className="model-hed">
              <a href="#">Laboratorios Ingen</a>
            </h3>
          </figcaption>
        </figure>

        <figure className="model">
          <img className="rexy" src={imgTres} />
          <figcaption className="model--caption">
            <h3 className="model-hed"><a href="#">Rexy</a></h3>
          </figcaption>
        </figure>

        <figure className="model">
          <img src={imgQuatro} />
          <figcaption className="model--caption">
            <h3 className="model-hed"><a href="#">Raptors</a></h3>
          </figcaption>
        </figure>

        <figure className="model">
          <img src={imgCinco} />
          <figcaption className="model--caption">
            <h3 className="model-hed"><a href="#">Predios Ingen</a></h3>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default sectionFive;
