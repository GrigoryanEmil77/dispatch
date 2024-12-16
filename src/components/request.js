
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import './request.css';

// const RequestData = () => {
//     const [request, setRequest] = useState([]);
//     const [messages,setMessages] = useState([])

//     useEffect(() => {
//       const fetchNavbar = async () => {
//         try {
//           const response = await axios.get('http://localhost:5000/api/request');
  
//           setRequest(response.data);
//         } catch (error) {
//           console.error('Error fetching navbar data:', error);
//         }
//       };
  
//       fetchNavbar();
//     }, []);
//     useEffect(() => {
//         const fetchNavbar = async () => {
//           try {
//             const response = await axios.get('http://localhost:5000/api/message');
    
//             setMessages(response.data);
//           } catch (error) {
//             console.error('Error fetching navbar data:', error);
//           }
//         };
    
//         fetchNavbar();
//       }, []);
//     const { titlefirst = "",titlesecond="",  } =
//     request.length > 0 ? request[0] : {};
//     const { id="",to="",name="",type="",email="",message=""  } =
//     messages.length > 0 ? messages[0] : {};

  
    
//   return (
//     <div className="container elements mt-5" id="SETUP">
//       <form id="form" className="mt-3">
//         <fieldset>
//           <h2 className="text-center elements" data-aos="flip-up">
//             {titlefirst} <span style={{color:"purple"}}>{titlesecond}</span>
//           </h2>
//           <div className="row justify-content-center mt-5 elements">
//             <div className="col-md-4">
//               <div className="form-group elements" data-aos="fade-up">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   id="name"
//                   placeholder="Company Name:*"
//                   required
//                 />
//               </div>
//               <div className="form-group mt-5 elements" data-aos="fade-up">
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email_id"
//                   id="email_id"
//                   placeholder="E-mail:*"
//                   required
//                 />
//               </div>
//               <div className="custom-margin">
//                 <div className="form-group mt-5 elements" data-aos="fade-up">
//                   <input
//                     type="number"
//                     className="form-control no-arrow"
//                     name="number"
//                     id="number"
//                     placeholder="Phone Number:*"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 type elements">
//               <div className="form-group elements" data-aos="fade-up">
//                 <select className="form-control" name="type" id="type" required>
//                   <option>Select Equipment Type:*</option>
//                   <option>Dry Van</option>
//                   <option>Reefer</option>
//                   <option>Box Truck</option>
//                   <option>Flat Bed</option>
//                   <option>Step Deck</option>
//                   <option>Power Only</option>
//                   <option>Others</option>
//                 </select>
//               </div>
//               <div className="form-group mt-5 elements" data-aos="fade-up">
//                 <textarea
//                   className="form-control text"
//                   name="message"
//                   id="message"
//                   placeholder="Additional Information:"
//                   required
//                 ></textarea>
//               </div>
//               <div className="elements">
//                 <input type="hidden" id="from_name" name="from_name" />
//                 <input type="hidden" id="replyto" name="from_email" />
//                 <button
//                   type="submit"
//                   data-aos="fade-up"
//                   id="button"
//                   className="btn btn "
//                   style={{marginTop:"17px"}}
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </div>
         
//           </div>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default RequestData;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import './request.css';

// const RequestData = () => {
//   const [request, setRequest] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     type: '',
//     message: ''
//   });

//   useEffect(() => {
//     const fetchNavbar = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/request');
//         setRequest(response.data);
//       } catch (error) {
//         console.error('Error fetching navbar data:', error);
//       }
//     };

//     fetchNavbar();
//   }, []);

//   useEffect(() => {
//     const fetchNavbar = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/message');
//         setMessages(response.data);
//       } catch (error) {
//         console.error('Error fetching navbar data:', error);
//       }
//     };

//     fetchNavbar();
//   }, []);

//   const { titlefirst = "", titlesecond = "" } = request.length > 0 ? request[0] : {};
//   const { id = "", to = "", name = "", type = "", email = "", message = "" } = messages.length > 0 ? messages[0] : {};

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/send-email', formData);
//       alert('Email sent successfully!');
      

//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('There was an error sending the email. Please try again.');

//     }
//   };
  

//   return (
//     <div className="container elements mt-5" id="SETUP">
//       <form id="form" className="mt-3" onSubmit={handleSubmit}>
//         <fieldset>
//           <h2 className="text-center elements" data-aos="flip-up">
//             {titlefirst} <span style={{ color: "purple" }}>{titlesecond}</span>
//           </h2>
//           <div className="row justify-content-center mt-5 elements">
//             <div className="col-md-4">
//               <div className="form-group elements" data-aos="fade-up">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   id="name"
//                   placeholder="Company Name:*"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group mt-5 elements" data-aos="fade-up">
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   id="email_id"
//                   placeholder="E-mail:*"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="custom-margin">
//                 <div className="form-group mt-5 elements" data-aos="fade-up">
//                   <input
//                     type="number"
//                     className="form-control no-arrow"
//                     name="number"
//                     id="number"
//                     placeholder="Phone Number:*"
//                     value={formData.number}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 type elements">
//               <div className="form-group elements" data-aos="fade-up">
//                 <select
//                   className="form-control"
//                   name="type"
//                   id="type"
//                   value={formData.type}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option>Select Equipment Type:*</option>
//                   <option>Dry Van</option>
//                   <option>Reefer</option>
//                   <option>Box Truck</option>
//                   <option>Flat Bed</option>
//                   <option>Step Deck</option>
//                   <option>Power Only</option>
//                   <option>Others</option>
//                 </select>
//               </div>
//               <div className="form-group mt-5 elements" data-aos="fade-up">
//                 <textarea
//                   className="form-control text"
//                   name="message"
//                   id="message"
//                   placeholder="Additional Information:"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>
//               <div className="elements">
//                 <input type="hidden" id="from_name" name="from_name" />
//                 <input type="hidden" id="replyto" name="from_email" />
//                 <button
//                   type="submit"
//                   data-aos="fade-up"
//                   id="button"
//                   className="btn btn"
//                   style={{ marginTop: "17px" }}
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </div>
//           </div>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default RequestData;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './request.css';
import emailjs from 'emailjs-com';

const RequestData = () => {
  const [request, setRequest] = useState([]);
  // const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    type: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/request');
        setRequest(response.data);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchNavbar();
  }, []);


  useEffect(() => {
    
    emailjs.init("tSr3jHOvVSSg1jkfL")
  }, []);

  const { titlefirst = "", titlesecond = "" } = request.length > 0 ? request[0] : {};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const serviceID = "service_f2qot76";
    const templateID = "template_v0h4dql";
  
    const emailParams = {
      from: formData.email,
      replyto: formData.email,
      to_email: 'egrigoryan264@gmail.com',  
      name: formData.name,
      email_id: formData.email,
      number: formData.number,
      type: formData.type,
      message: formData.message
    };
  
    emailjs.send(serviceID, templateID, emailParams)
      .then((response) => {
        alert('Your message has been successfully sent.');
        
        setFormData({
          name: '',
          email: '',
          number: '',
          type: '',
          message: ''
        });
        setIsSending(false); 
      }, (error) => {
        console.error('Error sending email:', error);
        alert(`Failed to send your message. Error: ${error.text || 'Unknown error'}`);
        setIsSending(false); 
      });
  };
  
  
  
  return (
    <div className="container elements mt-5" id="SETUP">
      <form id="form" className="mt-3" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="text-center elements" data-aos="flip-up">
            {titlefirst} <span style={{ color: "purple" }}>{titlesecond}</span>
          </h2>
          <div className="row justify-content-center mt-5 elements">
            <div className="col-md-4">
              <div className="form-group elements" data-aos="fade-up">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Company Name:*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-5 elements" data-aos="fade-up">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email_id"
                  placeholder="E-mail:*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="custom-margin">
                <div className="form-group mt-5 elements" data-aos="fade-up">
                  <input
                    type="number"
                    className="form-control no-arrow"
                    name="number"
                    id="number"
                    placeholder="Phone Number:*"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 type elements">
              <div className="form-group elements" data-aos="fade-up">
                <select
                  className="form-control"
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option>Select Equipment Type:*</option>
                  <option>Dry Van</option>
                  <option>Reefer</option>
                  <option>Box Truck</option>
                  <option>Flat Bed</option>
                  <option>Step Deck</option>
                  <option>Power Only</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="form-group mt-5 elements" data-aos="fade-up">
                <textarea
                  className="form-control text"
                  name="message"
                  id="message"
                  placeholder="Additional Information:"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="elements">
                <input type="hidden" id="from_name" name="from_name" />
                <input type="hidden" id="replyto" name="from_email" />
                <button
                  type="submit"
                  data-aos="fade-up"
                  id="button"
                  className="btn btn"
                  style={{ marginTop: "17px" }}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "SUBMIT"}
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default RequestData;