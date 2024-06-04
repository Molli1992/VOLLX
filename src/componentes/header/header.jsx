import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../imagenes/logo-Vollx-removebg-preview.png";
import "./header.css";

function Header() {
  const [openClose, setOpenClose] = useState(false);
  const navigate = useNavigate();

  const onClickOpenClose = () => {
    const divResponsive = document.getElementById("responive-header-id");

    if (openClose === false) {
      divResponsive.style.display = "grid";
      setOpenClose(true);
    } else {
      setOpenClose(false);
      divResponsive.style.display = "none";
    }
  };

  const onClickLinkResponsive = () => {
    const divResponsive = document.getElementById("responive-header-id");
    setOpenClose(false);
    divResponsive.style.display = "none";
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <div className="body-header">
      <div className="container-header-1">
        <img src={Logo} alt="Logo-Empresa" onClick={onClickLogo} />
      </div>

      <div className="container-header-2">
        <Link to={"/"} className="link-header">
          Home
        </Link>

        <Link to={"/us"} className="link-header">
          Us
        </Link>

        <Link to={"/carrer"} className="link-header">
          Carreer
        </Link>

        <Link to={"/contact"} className="link-header">
          Contact
        </Link>

        <div className="header-svg">
          {openClose === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              class="bi bi-filter"
              viewBox="0 0 16 16"
              onClick={onClickOpenClose}
              style={{ cursor: "pointer" }}
            >
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#ffffff"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={onClickOpenClose}
              style={{ cursor: "pointer" }}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          )}
        </div>
      </div>

      <div
        className="container-responsive-header"
        id="responive-header-id"
        onClick={onClickLinkResponsive}
      >
        <Link to={"/"} className="link-header-responsive">
          Home
        </Link>

        <Link to={"/us"} className="link-header-responsive">
          Us
        </Link>

        <Link to={"/carrer"} className="link-header-responsive">
          Carrer
        </Link>

        <Link to={"/contact"} className="link-header-responsive">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
