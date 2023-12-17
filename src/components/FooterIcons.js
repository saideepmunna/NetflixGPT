import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterIcons = () => {
  return (
    <div>
      <div className="flex text-white text-2xl gap-8">
        <Link to={"https://www.facebook.com/NetflixIN"} target="_blank">
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </Link>
        <Link to={"https://www.instagram.com/Netflix_IN/"} target="_blank">
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </Link>
        <Link to={"https://twitter.com/netflixindia"} target="_blank">
          <div>
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </Link>

        <Link to={"https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"} target="_blank">
          <div>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterIcons;
