/* eslint-disable react/prop-types */
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./heading.css"

function Heading(props) {
  const {technical, phoneNo} = props.header;
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
        <a href="#"><IoLogoFacebook/></a >
        <a href="#"><FaTwitter/></a >
        <a href="#"><FaLinkedinIn/></a >
        <a href="#"><FaInstagram/></a >
        
      </div>
    </div>
    </div>
  );
}

export default Heading;
