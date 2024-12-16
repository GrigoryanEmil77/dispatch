import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './navbar.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"; 



const Navbar = () => {
  const [navbars, setNavbars] = useState([]);
  const [service,SetService] = useState([]);
  const [truckTypes,SetTruckTypes] =useState([])
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        SetService(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trucktypes');
        SetTruckTypes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/navbarinfo');

        setNavbars(response.data);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchNavbar();
  }, []);

  
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };


  const { home="",about="",services="",testimonials="",faqs="",
           contact="",setup="",picture=""} =
            navbars.length > 0 ? navbars[0] : {};
   
const {LoadSearch="", Booking="", BrokerSetup="", Detention="",Invoicing="",Factoring="",Support=""}=
service.length > 0 ? service[0] : {};
const {DryVan="",Reefer="", BoxTruck="",Flatbed="", StepDeck="",PowerOnly=""}=
truckTypes.length > 0 ? truckTypes[0] : {};



    const handleSubmenuClick = (event) => {
      event.stopPropagation(); // Prevent closing parent dropdown
      const submenu = event.currentTarget.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("show");
      }
    };
 
  return (
 

<nav class="navbar  navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <div>
    
      <img src={picture}   id="logo" class="navbar-brand" style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>
    </div>
      <button class="navbar-toggler"  
       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas  offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header" >
          <button type="button" class="btn-close"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >
            <li class="nav-item custom-spacing"  data-bs-dismiss="offcanvas">
              <a class="nav-link scroll-link" href="#Home"   style={{whiteSpace:"nowrap"}}
                 onClick={(e) => handleScroll(e, "Home")}>{home}</a>
            </li>
            <li class="nav-item custom-spacing"  data-bs-dismiss="offcanvas">
              <a class="nav-link scroll-link" href="#About Us"   style={{whiteSpace:"nowrap"}}
              onClick={(e) => handleScroll(e, "About Us")}>{about}</a>
            </li>
            <li className="nav-item dropdown custom-spacing">
      <a
        className="nav-link dropdown-toggle"
        href="#Services"
        id="navbarDropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Services
      </a>
      <div
        className="dropdown-menu elements"
        data-bs-dismiss="offcanvas"
        aria-labelledby="navbarDropdownMenuLink"

      >
        <a className="dropdown-item scroll-link"  href="#Load">
          {LoadSearch}
        </a>
        <a className="dropdown-item scroll-link"   style={{ whiteSpace: 'normal', wordWrap: 'break-word' }} href="#Book">
          {Booking}
        </a>
        <a className="dropdown-item scroll-link" href="#Broker">
          {BrokerSetup}
        </a>
        <a className="dropdown-item scroll-link" href="#Det">
          {Detention}
        </a>
     
        <a className="dropdown-item scroll-link" href="#Invoicing">
          {Invoicing}
        </a>
        <a
  className="dropdown-item scroll-link"
  href='#Factoring'
  style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
>
  {Factoring}
</a>
        <a className="dropdown-item scroll-link"  href="#Sup">
          {Support}
        </a>

        <div className="dropdown-divider"></div>
        <a
          className="dropdown-item dropdown-toggle"
          id="navbarDropdownMenuTruck"
          aria-haspopup="true"
          aria-expanded="false"
    
          onClick={handleSubmenuClick}
        >
          Truck Types
        </a>
        <div className="dropdown-menu elements"
         >
          <a className="dropdown-item scroll-link" href="#DRY VAN">
            {DryVan}
          </a>
          <a className="dropdown-item scroll-link" href="#REEFER">
            {Reefer}
          </a>
          <a className="dropdown-item scroll-link" href="#BOX TRUCK">
            {BoxTruck}
          </a>
          <a className="dropdown-item scroll-link" href="#FLATBED">
            {Flatbed}
          </a>
          <a className="dropdown-item scroll-link" href="#STEP DECK">
            {StepDeck}
          </a>
          <a className="dropdown-item scroll-link" href="#POWER ONLY">
            {PowerOnly}
          </a>
        </div>
      </div>
    </li>

          <li class="nav-item custom-spacing"  data-bs-dismiss="offcanvas">
            <a class="nav-link scroll-link" href="#FAQS"   style={{whiteSpace:"nowrap"}}>{faqs}</a>
          </li>
            <li class="nav-item custom-spacing"  data-bs-dismiss="offcanvas" >
              <a class="nav-link scroll-link" href="#Customer">{testimonials}</a>
            </li>
         
            <li class="nav-item custom-spacing"  data-bs-dismiss="offcanvas"  >
              <a class="nav-link scroll-link" href="#Contact" style={{whiteSpace:"nowrap"}}>{contact}</a>
            </li>
        
            <li className="nav-item" data-bs-dismiss="offcanvas">
  <button
    type="button"
    className="btn btn custom-btn scroll-link"
    style={{marginLeft:"10px"}}
    onClick={() => {
      const section = document.querySelector("#SETUP");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    {setup}
  </button>
</li>

          </ul>
        </div>
      </div>
    </div>
  </nav>

  );
};

export default Navbar;
