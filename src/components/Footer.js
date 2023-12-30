import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";


const Footer = () => {
  return (
    <div>
        <div className="md:mx-[92px] md:px-12 px-6 relative z-40 pt-[116px] md:pt-48 pb-10 bg-black md:bg-transparent">
        <FooterIcons/>
        <FooterLinks/>
        </div>
       
    </div>
  )
}



export default Footer;