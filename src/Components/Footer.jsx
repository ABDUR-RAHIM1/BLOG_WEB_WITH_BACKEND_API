import React from 'react'; 
import { Link } from 'react-router-dom';
import '../StyleComponent/Footer.css'
import {BsGithub , BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'  
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h4><Link to='/'>𝓢𝓽𝓸𝓻𝔂 𝓢𝓮𝓮𝓭𝓼</Link></h4>
            <p>
            "Exploring the World: A Journey <br /> through Cultures, Adventure, and Inspiration"
            </p>
          </div>
          <div className="col-sm-4">
            <h4> Address </h4>
            <ul>
            <li>Street:  11 Paridas Road, Bangla Bazar, 1100</li>
              <li>City:   Dhaka</li>
              <li>Zip code   1100</li>
              <li>Country  Bangladesh</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h4>Contact</h4>
            <ul className='iconsContainer'> 
              <li><Link to='https://web.facebook.com/Kamalakantha2' target="_blank"><BsFacebook className="socialIcons"/></Link></li>  
              <li><AiFillInstagram className="socialIcons"/></li>  
              <li><Link to='https://github.com/ABDUR-RAHIM1?tab=repositories' target='_blank'><BsGithub className="socialIcons"/></Link></li> 
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;