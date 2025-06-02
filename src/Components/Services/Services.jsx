import React, { useState } from "react";
import "./Services.css";
const Services = () => {

    const[Toggle,setToggle]=useState(0);

    const toggleTap =(index)=>{
        setToggle(index);
    }
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services_title">
                Web <br /> Designer
              </h3>
            </div>
            <span className="services__button" onClick={()=>toggleTap(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={Toggle === 1 ? "services__modal active-model" : "services__modal"}>
              <div className="services__model-content">
                <i onClick={()=>toggleTap(0)}className="uil uil-times services__model-close"></i>

                <h3 className="services__model-title">Web  Designer</h3>
                <p className="services__model-description">
                  I specialize in designing and developing responsive user
                  interfaces, creating smooth UX interactions, and crafting
                  visually strong brand identities.
                </p>

                <ul className="services__model-services grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Web page development.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
