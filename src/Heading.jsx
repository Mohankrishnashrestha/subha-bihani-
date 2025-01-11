/* eslint-disable react/prop-types */
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./heading.css";

function Heading({navigation, header, setContent}) {
  const { technical, phoneNo } = header;
  const { title, home, about, portfolio, service, contact } = navigation;
  
  return (
    <div className="header_main">
      <div className="header">
        <div className="header_info">
          <div>
            <FaHeadphonesAlt /> {technical}
          </div>
          <div>
            <FaPhoneAlt /> {phoneNo}
          </div>
        </div>
        <div className="socialMedia">
          <a href="#">
            <IoLogoFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="title">{title}</div>
        <div>
          <ul className="navicon">
            <li onClick={()=>setContent("home")}>{home}</li>
            <li onClick={()=>setContent("about")}>{about}</li>
            <li onClick={()=>setContent("portfolio")}>{portfolio}</li>
            <li onClick={()=>setContent("service")}>{service}</li>
            <li onClick={()=>setContent("contact")}>{contact}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Heading;
