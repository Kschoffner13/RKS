import Footer from "../components/Footer";
import { CgFileDocument } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import {
  MdDesignServices,
  MdManageAccounts,
  MdConstruction,
} from "react-icons/md";
import { FaCompassDrafting } from "react-icons/fa6";

function Home() {
  return (
    <div className="HomeContent">
      <div className="welcome">
        <div className="W_content">
          <h1>Welcome to RKS Consulting</h1>
          <p>
            RKS Consulting is a leading provider of telecommunications and
            software consulting services. We have been providing quality
            services to our clients since 2024. Our team of experts is dedicated
            to providing the best solutions to meet the needs of our clients. We
            offer a wide range of services, including network design, software
            development, and project management. Contact us today to learn more
            about how we can help you achieve your goals.
          </p>
        </div>
      </div>
      <div className="Services">
        <h1>Services</h1>
        <div className="services_content">
          <ul>
            <li>
              <div>
                <CgFileDocument className="icon" />
                <h3>Documentation management </h3>
              </div>
            </li>
            <li>
              <div>
                <MdDesignServices className="icon" />
                <h3>Design</h3>
              </div>
            </li>
            <li>
              <div>
                <MdManageAccounts className="icon" />
                <h3>Project management</h3>
              </div>
            </li>
            <li>
              <div>
                <TbWorld className="icon" />
                <h3>Procurement</h3>
              </div>
            </li>
            <li>
              <div>
                <FaCompassDrafting className="icon" />
                <h3>Drafting</h3>
              </div>
            </li>
            <li>
              <div>
                <MdConstruction className="icon" />
                <h3>Implementation</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="services">
        <h1>Our Services</h1>
        <div className="services_content">
          <ul>
            <li>
              <div>
                <CgFileDocument className="icon" />
                <h3>Documentation management </h3>
              </div>
            </li>
            <li>
              <div>
                <MdDesignServices className="icon" />
                <h3>Design</h3>
              </div>
            </li>
            <li>
              <div>
                <MdManageAccounts className="icon" />
                <h3>Project management</h3>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <TbWorld className="icon" />
                <h3>Procurement</h3>
              </div>
            </li>
            <li>
              <div>
                <FaCompassDrafting className="icon" />
                <h3>Drafting</h3>
              </div>
            </li>
            <li>
              <div>
                <MdConstruction className="icon" />
                <h3>Implementation</h3>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Home;
