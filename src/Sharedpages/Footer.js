import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Footer = () => {
    return (
        <div>

<footer className="footer p-10 text-base-content ">
  <div className='text-white'>
    <span className="footer-title   font-bold">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='text-white'>
    <span className="footer-title  text-white font-bold">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='text-white'>
    <span className="footer-title    text-white font-bold">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  
  </div> 
  <div className='text-white'>
    <span className="footer-title  text-white font-bold">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@gmail.com" className="input text-white input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;