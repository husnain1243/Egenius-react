import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../asserts/EgeniusLogo.png';

import "../Style/style.css"

export const Navbar = () => {
  const Route = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/potfolio",
      name: "Potfolio",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/contactus",
      name: "Contact Us",
    },
  ];
  const [routeDate] = useState(Route);
  return (
    <div className="Navbar d-flex flex-column py-2 bg-dark">
      <nav className="container">
        <div className="row"> 
          <div className="col-12 col-md-2 col-lg-3 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
            <div className="logo-container" style={{width: "50px"}}>
              <img src={Logo} alt="logo" className="d-block img-fluid m-auto w-100 h-100"/>
              <p className="m-0 p-0">Egenius</p>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <ul className="d-flex flex-row justify-content-center gap-3 list-unstyled m-0">
                {routeDate.map(({ name, path }, index) => {
                  return (
                      <li key={index}>
                        <Link to={path} className="link text-decoration-none text-white">{name}</Link>
                      </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-0 col-lg-3 d-none d-lg-flex justify-content-end align-items-center">
              <p className="m-0">
                <a href="mailto:husnainmohammad16@gmail.com">
                  husnainmohammad16@gmail.com
                </a>
              </p>
          </div>
        </div>
      </nav>
    </div>
  );
};
