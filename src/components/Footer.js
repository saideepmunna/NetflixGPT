import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";


const Footer = () => {
  return (
    <div>
        <div className="mt-6 mx-[92px] px-12 relative z-40 pt-24 py-10">
        <FooterIcons/>
        <FooterLinks/>
        </div>
       
    </div>
  )
}



export default Footer;