import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './services.css'


const ServicesData = () => {
    const [services,SetServices] = useState([])
   
  
    useEffect(() => {
        AOS.init({
          once: true,
          duration: 1200,
        });
      }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        SetServices(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 

 
const {titlefirst="",titlesecond="",LoadSearch="", Booking="", BrokerSetup="", Detention="",Invoicing="",Factoring="",Support="",
picture1="", picture2="", picture3="", picture4="",picture5="",picture6="",picture7="",}=
      services.length > 0 ? services[0] : {};

     
    
 
      document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', event => event.preventDefault());
      });
      
      document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'IMG') {
          e.preventDefault();
        }
      });
      
  return (
   
<div className="container-fluid services elements mt-3" id="Services">
  <h2 className="text  text-center elements" data-aos="flip-up"> {titlefirst} <span> {titlesecond} </span> </h2>
  <div className="row justify-content-center mt-5  elements" >
      <div className="col elements  m" id="new">
          <div className="new text-center elements" id="Load"  data-aos="fade-right">
              <img src={picture1}   data-aos="fade-right" className="provide"  style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>                      
              <div className="text-container">
                <p className="text">{LoadSearch}</p>
            </div>
            <div className="worktext">
              <p >{LoadSearch}</p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id='Book' data-aos="fade-right">
        <img src={picture2}  data-aos="fade-right" className="provide"   style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>                     
            
            <div className="text-container">
       <p className='text' style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>{Booking}</p>
</div>
<div className="worktext rate" style={{marginLeft:"10px"}}>
              <p>{Booking}</p>
            </div> 
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id="Broker" data-aos="fade-right">
        <img src={picture3}  data-aos="fade-right" className="provide"   style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>                    
              <div className="text-container">
                <p className="text">{BrokerSetup}</p>
            </div>
            <div className="worktext">
              <p >{BrokerSetup}</p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements"  id="Det" data-aos="fade-right">
        <img src={picture4}  data-aos="fade-right" className="provide"   style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>                   
        <div className="text-container">
        {Detention ? (
    
    <>
      <p className="text-nowrap">{Detention.split(" ")[0]}</p> 
      <p className="text-nowrap">{Detention.split(" ").slice(1).join(" ")}</p> 
    </>
  ) : (  
    <>    
    </>
  )}
</div>
            <div className="worktext">
              <p >{Detention}</p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id="Invoicing"  data-aos="fade-right">
        <img src={picture5}  data-aos="fade-right" className="provide"   style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>                    
              <div className="text-container">
                <p className="text">{Invoicing}</p>
            </div>
            <div className="worktext">
              <p>{Invoicing}</p>
            </div>
          </div>
      </div>
      <div className="col elements m" >
        <div className="new text-center elements" id='Factoring' data-aos="fade-right">
        <img src={picture6}  data-aos="fade-right" className="provide"   style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>                      
        <div className="text-container">
        {Factoring ? (
    
    <>
      <p className="text-nowrap">{Factoring.split(" ")[0]}</p> 
      <p className="text-nowrap">{Factoring.split(" ").slice(1).join(" ")}</p> 
    </>
  ) : (   
    <>    
    </>
  )}
</div>
            <div className="worktext" style={{marginRight:"45px"}}>
              <p>{Factoring}</p>
            </div>
          </div>
      </div>
      <div className="col elements m">
        <div className="new text-center elements" id='Sup' data-aos="fade-right">
        <img src={picture7}  data-aos="fade-right" className="provide"   style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>                     
              <div className="text-container">
                <p className="text">{Support}</p>
            </div>
            <div className="worktext">
              <p >{Support}</p>
            </div>
          </div>
      </div>
  </div>
</div>


  );
};

export default ServicesData;

