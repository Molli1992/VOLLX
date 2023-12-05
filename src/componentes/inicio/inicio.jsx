import React, { useState } from "react";
import Contacto from "../contacto/contacto";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

function Inicio() {
  const [sliderInicio, setSliderInicio] = useState(1);

  const onClickAumentarSlider = () => {
    var suma;

    if (sliderInicio === 4) {
      suma = 1;
    } else {
      suma = sliderInicio + 1;
    }

    setSliderInicio(suma);
  };

  const onClickRestarSlider = () => {
    var resta

    if (sliderInicio === 1) {
      resta = 4;
    } else {
      resta = sliderInicio - 1;
    }

    setSliderInicio(resta);
  };

  const history = useNavigate();

  const routeContactOnClick = () => {
    history("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <div className="body-inicio">
      <div className="container-inicio-1">
        <h1>
          Business Consulting, Business, Management, Marketing Analysis and
          More...
        </h1>

        <button className="button-top" onClick={routeContactOnClick}>Contat Us</button>
      </div>

      <div className="container-inicio-2">
        <h1>Why choose us?</h1>

        <p>
          Choosing our consultancy means selecting excellence in business
          strategy. Our seasoned experts navigate the complex realms of
          management, business analysis, and marketing analysis with finesse.
          Trust us to guide your enterprise towards unparalleled success.
        </p>

        <p>
          Opting for our consultancy equates to embracing a powerhouse in
          business solutions. With a keen focus on strategic management, nuanced
          analysis, and comprehensive business insight, we elevate your company
          to new heights of achievement.
        </p>

        <p>
          Selecting our consultancy is choosing mastery in management
          consultancy and business analytics. Dive into a realm of innovative
          strategies, comprehensive market analyses, and expert insights
          tailored to steer your company towards sustained growth and triumph.
        </p>
      </div>

      <div className="container-inicio-3">
        {sliderInicio === 1 ? (
          <div className="card-inicio-3">
            <img
              src="https://www.thoughtco.com/thmb/G3Pc64GouIGNS-LepT5k2PQl4p8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-625727674-5a6d3a236b974564a4e39795bfcbd827.jpg"
              alt="imagen-card"
            />

            <p>
              Dive into a world of informed decisions and market clarity. Our
              specialized team dissects data, harnessing its power to shape
              tailored marketing blueprints that resonate with your audience.
              From demographic targeting to campaign optimization, we pave the
              way for your brand's resonance. Partner with us to decode the
              complexities, driving your marketing endeavors towards
              unparalleled success.
            </p>

            <h1>Marketing Analysis</h1>

            <div className="container-arrows-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
                onClick={onClickRestarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
                onClick={onClickAumentarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </div>
        ) : null}

        {sliderInicio === 2 ? (
          <div className="card-inicio-3">
            <img
              src="https://www.namtek.ca/wp-content/uploads/2016/09/iStock_000026007910Medium_copy.jpg"
              alt="imagen-card"
            />

            <p>
              Step into a realm of tailored strategies and expert counsel. Our
              seasoned professionals analyze, strategize, and execute with
              precision to propel your business towards its pinnacle. From
              market analysis to dynamic problem-solving, we sculpt pathways to
              success. With us, witness the fusion of vision and strategy,
              driving your enterprise towards sustained growth and prosperity.
            </p>

            <h1>Business Solutions</h1>

            <div className="container-arrows-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
                onClick={onClickRestarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
                onClick={onClickAumentarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </div>
        ) : null}

        {sliderInicio === 3 ? (
          <div className="card-inicio-3">
            <img
              src="https://cdn.corporatefinanceinstitute.com/assets/strategic-management.jpeg"
              alt="imagen-card"
            />

            <p>
              Explore a world of innovative strategies and meticulous planning.
              Our expert team navigates the complexities of management, offering
              insights to optimize operations, drive growth, and ensure
              sustainable success. From organizational restructuring to
              visionary leadership guidance, we empower your business to thrive
              in today's competitive landscape. Experience the transformative
              power of strategic management with us.
            </p>

            <h1>Strategic Management</h1>

            <div className="container-arrows-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
                onClick={onClickRestarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
                onClick={onClickAumentarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </div>
        ) : null}

        {sliderInicio === 4 ? (
          <div className="card-inicio-3">
            <img
              src="https://thebitterbusiness.files.wordpress.com/2015/03/business-consultant.jpg"
              alt="imagen-card"
            />

            <p>
              Unlock your company's potential with our tailored strategies and
              astute guidance. From streamlining operations to crafting
              visionary growth plans, our consultants are adept at dissecting
              challenges and sculpting solutions that propel your enterprise
              forward. With a blend of analytical prowess and industry insight,
              we're your partners in redefining success metrics and sculpting a
              roadmap toward sustainable growth.
            </p>

            <h1>Business Consulting</h1>

            <div className="container-arrows-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
                onClick={onClickRestarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
                onClick={onClickAumentarSlider}
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </div>
        ) : null}
      </div>

      <Contacto />
    </div>
  );
}

export default Inicio;
