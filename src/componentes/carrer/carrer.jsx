import React, { useState } from "react";
import Contacto from "../contacto/contacto";
import "./carrer.css";

function Carrer() {
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
    var resta;

    if (sliderInicio === 1) {
      resta = 4;
    } else {
      resta = sliderInicio - 1;
    }

    setSliderInicio(resta);
  };
  return (
    <div className="body-carrer">
      <div className="container-carrer-1">
        <h1>Learn about our experience</h1>
        <p>More than 10 years of knowledge</p>
      </div>

      <div className="container-carrer-2">
        <h1>Carrer</h1>

        <div className="container-carrer-3">
          <div className="left-container-carrer">
            <img
              src="https://www.cmindssolutions.com/img/business-consulting.jpg"
              alt="imagen-carrer"
              className="img-container-3-carrer"
            />
          </div>

          <div className="rigth-container-carrer">
            <h2 className="h2-container-3-carrer">Business Consulting</h2>
            <p className="p-conatianer-3-carrer">
              Businesses often seek guidance and expertise from consultancy
              firms to optimize their strategies, improve operations, and
              navigate challenges. Professional consultants analyze existing
              practices, provide actionable recommendations, and offer solutions
              tailored to the specific needs of the company. With a focus on
              enhancing efficiency and maximizing potential, consultancy
              services play a pivotal role in steering businesses towards
              success.
            </p>
          </div>
        </div>

        <div className="container-carrer-3">
          <div className="left-container-carrer">
            <h2 className="h2-container-3-carrer">Marketing Analysis</h2>
            <p className="p-conatianer-3-carrer">
              Marketing analysis is crucial for businesses aiming to understand
              consumer behavior, market trends, and competitive landscapes. It
              involves dissecting data, identifying patterns, and extracting
              meaningful insights to shape marketing strategies. Through
              thorough analysis, companies can refine their approaches, target
              the right audience, allocate resources effectively, and tailor
              their messages to resonate with consumers, thereby driving growth
              and enhancing brand positioning.
            </p>
          </div>

          <div className="rigth-container-carrer">
            <img
              src="https://images.thebusinessplanshop.com/market-analysis.jpg?tr=n-twitter"
              alt="imagen-carrer"
              className="img-container-3-carrer"
            />
          </div>
        </div>

        <div className="container-carrer-3">
          <div className="left-container-carrer">
            <img
              src="https://www.argentinaproduct.com/ckfinder/userfiles/files/blog/projectmanagement.jpg"
              alt="imagen-carrer"
              className="img-container-3-carrer"
            />
          </div>

          <div className="rigth-container-carrer">
            <h2 className="h2-container-3-carrer">Management</h2>
            <p className="p-conatianer-3-carrer">
              Effective management is the cornerstone of organizational success.
              It involves overseeing resources, people, and processes to achieve
              predetermined goals. Strong leadership, strategic planning,
              efficient decision-making, and fostering a productive work culture
              are integral components of successful management. A well-managed
              company not only meets objectives but also inspires and empowers
              its workforce.
            </p>
          </div>
        </div>

        <div className="container-carrer-3">
          <div className="left-container-carrer">
            <h2 className="h2-container-3-carrer">Business</h2>
            <p className="p-conatianer-3-carrer">
              The realm of business encompasses a wide array of activities, from
              the inception of an idea to its execution and sustainability. It
              involves identifying opportunities, understanding market dynamics,
              managing resources, fostering partnerships, and adapting to
              changing landscapes. Successful businesses thrive by offering
              value, addressing consumer needs, and maintaining a competitive
              edge within their industries.
            </p>
          </div>

          <div className="rigth-container-carrer">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/633a774a842d06ecd68286ff/The-5-Biggest-Business-Trends-For-2023/960x0.jpg?height=430&width=711&fit=bounds"
              alt="imagen-carrer"
              className="img-container-3-carrer"
            />
          </div>
        </div>
      </div>

      <div className="container-inicio-3">
        {sliderInicio === 1 ? (
          <div className="card-inicio-3">
            <img
              src="https://i.pinimg.com/originals/dc/7a/58/dc7a58b880a89f2698536a2d3132ec59.jpg"
              alt="imagen-card"
            />

            <p>
              In the dynamic landscape of corporate endeavors, Vollx stands
              tall as a beacon of innovation and strategic acumen. Established
              with a steadfast commitment to revolutionize business practices,
              Vollx has emerged as a trailblazer in providing comprehensive
              solutions across diverse domains of corporate functionality.
            </p>

            <h1>Vollx</h1>

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
              src="https://proleon.com.mx/wp-content/uploads/2021/09/ESPIRITU-EMPRESA-2.jpg"
              alt="imagen-card"
            />

            <p>
              At Vollx, the ethos revolves around transcending conventional
              boundaries, embracing challenges, and engineering bespoke
              strategies that resonate with unparalleled success. With a proven
              track record in navigating the complexities of modern business
              environments, Vollx has consistently delivered transformative
              outcomes for its clientele.
            </p>

            <h1>Ethos </h1>

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
            <img src="https://i.imgur.com/TU6unql.jpg" alt="imagen-card" />

            <p>
              The cornerstone of Vollx' proficiency lies in its multifaceted
              approach encompassing cutting-edge management paradigms, incisive
              analytical frameworks, and a robust understanding of market
              dynamics. Leveraging a talented cadre of industry experts and
              data-driven methodologies, Vollx orchestrates a symphony of
              innovation to optimize performance, drive growth, and foster
              sustained success for businesses.
            </p>

            <h1>Approach</h1>

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
              src="https://i1.wp.com/varonasupport.com/wp-content/uploads/2018/10/business-3152586_1920-e1538643319881.jpg?fit=800%2C578&ssl=1"
              alt="imagen-card"
            />

            <p>
              The spectrum of Vollx' services spans the gamut of corporate
              requisites. From astute market analysis and strategic planning to
              operational optimization and seamless integration of technological
              advancements, Vollx serves as a holistic partner, facilitating
              businesses at every step of their journey towards excellence.
            </p>

            <h1>Services</h1>

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

export default Carrer;
