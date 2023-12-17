import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterIcons = () => {
  return (
    <div>
      
        <div className="flex text-white text-2xl gap-8">
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
       
       
      </div>
    
  );
};

export default FooterIcons;
