import React from "react";
import Contacto from "../contacto/contacto";
import "./nosotros.css";

function Nosotros() {
  return (
    <div className="body-nosotros">
      <div className="contrainer-nosotros-1">
        <h1>About Gatlings</h1>
        <p>More than 10 years in the market</p>
      </div>

      <div className="contrainer-nosotros-2">
        <h1>About us</h1>

        <p>
          At Gatlings, we are the architects of success in the realm of business
          consultancy. With a focus on strategic management, insightful market
          analysis, and innovative solutions, we pave the way for businesses to
          thrive in a competitive landscape.
        </p>
        <p>
          Our team comprises seasoned experts, each a visionary in their
          respective fields, dedicated to crafting tailored strategies that
          drive growth and reshape industry standards. We delve deep into market
          intricacies, deciphering trends, and leveraging data to fuel
          strategies that resonate.
        </p>
        <p>
          With a commitment to excellence and a client-centric approach, we
          collaborate closely with businesses, offering guidance that transcends
          conventional boundaries. From startups to established enterprises, our
          mission remains unwavering: to empower businesses and transform
          challenges into opportunities.
        </p>
        <p>
          Join us in sculpting a future where businesses not only thrive but
          lead with innovation, resilience, and strategic prowess. Together,
          let’s embark on a journey toward sustained success.
        </p>

        <img src="https://thumbs.dreamstime.com/b/business-solutions-success-concept-businessman-hand-connecting-jigsaw-puzzle-office-morning-light-148425510.jpg" alt="img-nosotros"/>
      </div>

      <div className="container-nosotros-3">

        <h1>What is Gatlings?</h1>

        <div className="container-nosotors-card">
          <div className="card-nostros">
            <h2>Trust in Our Expertise</h2>

            <p>
              At Gatlings, trust is the cornerstone of our relationship with
              every client. With years of experience in the realm of business
              consultancy, our team stands as a beacon of reliability and
              expertise.
            </p>
          </div>

          <div className="card-nostros">
            <h2>Our Commitment</h2>

            <p>
              We understand the importance of trust in the world of business.
              That's why our commitment goes beyond delivering solutions; it's
              about building lasting partnerships founded on transparency,
              integrity, and proven results.
            </p>
          </div>

          <div className="card-nostros">
            <h2>Why Choose Us</h2>

            <p>
              Our track record speaks volumes. We've guided countless businesses
              through challenges, leveraging our expertise in strategic
              management and precise marketing analysis. Every decision we make
              is rooted in your success.
            </p>
          </div>
        </div>

        
        <img src="https://hostingplus.ar/wp-content/uploads/2023/11/l_84fa523a70773e2bf6034741ce51c1f2.jpg" alt="img-nosotros"/>
      </div>

      <Contacto />
    </div>
  );
}

export default Nosotros;
