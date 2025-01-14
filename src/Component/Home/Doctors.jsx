import React from 'react';
import certified from "./../../assets/img/doctorimage/main.webp";
import certificatebg from "./../../assets/img/doctorimage/certificatebg.jpeg";
import doctorbg from "./../../assets/img/doctorimage/doctorbg.jpg";
import { PiPhoneCallBold } from "react-icons/pi";

import '../CSS/Doctor.css'
import doctoor1 from "./../../assets/img/doctorimage/d.jpg";
import doctoor2 from "./../../assets/img/doctorimage/images.jpg";
import doctoor3 from "./../../assets/img/doctorimage/d6.png";
import doctoor4 from "./../../assets/img/doctorimage/d3.webp";
import doctoor5 from "./../../assets/img/doctorimage/d4.jpg";
import doctoor6 from "./../../assets/img/doctorimage/d5.jpg";
import doctoor7 from "./../../assets/img/doctorimage/d1.jpg";
import doctoor8 from "./../../assets/img/doctorimage/d2.webp";
import { FaBookReader } from "react-icons/fa";

const styles = {

  container: {
    textAlign: 'center',
    margin: '20px',
  },
  h1: {
    color: '#2c8c82',
  },
  doctorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',  
    gap: '20px',
    margin: '20px',
    padding: 0,
  },
  doctorCard: {
    background: 'transparent',
    borderRadius: "20px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(100px)",
    WebkitBackdropFilter: "blur(100px)",
    padding: '1em',
    border: "1px solid #90EE90",
    transition: 'transform 0.5s',
  },

  doctorCardImg: {
    width: 'auto',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',

  },
  doctorCardImgUpdated: {
    width: '8em', 
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',

  },
  doctorCardH2: {
    margin: '10px 0',
    fontSize: '18px',
    color: '#00008B',
    fontWeight: 'bold', 
  },
  doctorCardP: {
    display: 'flex',
    flexDirection: 'column',  
    fontSize: '.9em',
    color: '#00008B',
    textAlign: 'center',
    alignItems: 'center',  
    justifyContent: 'center',  
    height: '4em',  
  },

  certificate: {

    background: 'transparent',
    borderRadius: "20px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(50px)",
    WebkitBackdropFilter: "blur(50px)",
    padding: '1em',
    border: "1px solid #90EE90",
    transition: 'transform 0.5s',

  },
  certificateTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2c8c82',
  },
  certificateBody: {
    fontSize: '18px',
    color: '#333',
  },
  doctorCardHover: { transform: 'scale(1.05)', },
  contactButton: {
    backgroundColor: '#2c8c82', 
    border: 'none', 
    color: 'white', 
    padding: '10px 20px', 
    textAlign: 'center', 
    textDecoration: 'none', 
    display: 'flex', 
    justifyContent : 'space-between',
    fontSize: '14px', 
    margin: '10px 2px', 
    cursor: 'pointer', 
    borderRadius: '8px', 
    transition: 'background-color 0.3s, transform 0.3s', },
};
const combinedStyles = { ...styles.certificateBody, ...styles.doctorCardImg, };
const Certificate = () => (
  <div className='container certificate' style={styles.certificate}>
    <h1 style={styles.certificateTitle}>Certificate of Excellence</h1>
    <p style={styles.certificateBody}>This certificate is proudly presented to</p>
    <h2 style={styles.certificateBody} className='p-10'>Dr. Biswajit Mohapatra <span className='fs-5'><span className='me-2 gap'></span><FaBookReader/> (MBBS From Stanford University)</span></h2>
    <img style={combinedStyles} src={certified} />
    <p style={styles.certificateBody}>For outstanding contribution in the field of Organic medicine and  dietician in OrgFood.</p>
  </div>
);
const doctorsData = [
  {
    name: 'Dr. Rakesh Dash',
    image: doctoor1,
    title: 'Expertise in diet recomendation',
    phones: ['+91-12345-67890', '+91-98765-43210'],
  },
  {
    name: 'Dr. Striver Gosh',
    image: doctoor2,
    title: 'Expertise in Organic Medicine',
    phones: ['+91-23456-78901'],
  },
  {
    name: 'Dr. Arjun Mehta',
    image: doctoor3,
    title: 'Expertis in nutritionist',
    phones: ['+91-34567-89012', '+91-45678-90123'],

  },
  {
    name: 'Dr. Smash Get',
    image: doctoor4,
    title: 'Expertise in diet',
    phones: ['+91-56789-01234'],

  },
  {
    name: 'Dr. Charlie Panth',
    image: doctoor5,
    title: 'Expertise in dermatologist',
    phones: ['+91-67890-12345'],

  },
  {
    name: 'Dr. Akash Pann',
    image: doctoor6,
    title: 'Expertise in medicine field',
    phones: ['+91-78901-23456'],

  },
  {
    name: 'Dr. Priya Sharma',
    image: doctoor8,
    title: 'Expertise in gastroenterologist',
    phones: ['+91-89012-34567'],

  },
  {
    name: 'Dr. Kavita Desai',
    image: doctoor7,
    title: 'Expertise in dermatologist',
    phones: ['+91-90123-45678'],
  },];
export default function Doctors() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Our Doctors</h1>
      <div className="container">
        <Certificate />
      </div>
      <div className="container">
        <p className='text-center text-primary fs-3'>In case of any issue regrading these vegatable contact our <span className='fs-1'>Doctor's</span> or reach out us </p>
      <div className='doctor-grid ' style={styles.doctorGrid}>
        {
          doctorsData.map((doctor, index) => (
            <div className='doctor-card' style={styles.doctorCard} key={index}>
              <div style={styles.doctorCardBackground}></div>
              <div style={styles.doctorCardContent}>
                <img style={styles.doctorCardImgUpdated} src={doctor.image} alt={`Doctor ${index}`} />
                <h2 style={styles.doctorCardH2}>{doctor.name}</h2>
                <p style={styles.doctorCardP}>{doctor.title}</p>
                {
                  doctor.phones.map((phone, phoneIndex) => (
                    <a key={phoneIndex} href={`tel:${phone}`} className="contact-button" style={styles.contactButton} > <span className='fs-1'><PiPhoneCallBold/></span> <span className='gap'></span> {phone} </a>
                  ))
                }
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}
