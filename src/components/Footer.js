import RKSLogo from "../Images/RKSLogo.png";
import { MdLocationOn } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="subfooter">
        <img src={RKSLogo} alt="RKS Logo" className="footer-logo" />
        <p>Telecommunications Consulting </p>
        <p>© 2024 RKS. All Rights Reserved</p>
      </div>
      <div className="subfooter">
        <h2>Head Office</h2>
        <p>
          <MdLocationOn />
          63 Cranarch Heights SE,
          <br /> Calgary, Alberta, T3M 0V6
        </p>
        <p>
          <AiOutlinePhone /> 587-888-6009
        </p>
        <p>
          <AiOutlineMail /> rkstcom@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
