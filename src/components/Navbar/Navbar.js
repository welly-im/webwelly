import './Navbar.css'
import {React,  useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="Navbar">
    <h1 className="navbar-logo">Welly Im</h1>
    <div className={`navbar-items ${isOpen && "open"}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#experience">Experience</a>
      <a href="#portofolio">Portofolio</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="navbar-socials">
      <a href="#linkedin"> <i className='fa fa-linkedin fa-md'></i></a>
      <a href="#facebook"> <i className='fa fa-facebook fa-md'></i></a>
      <a href="#instagram"> <i className='fa fa-instagram fa-md'></i></a>
    </div>
    <div className={`navbar-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="bar">
      </div>
    </div>
</nav>
  )
}