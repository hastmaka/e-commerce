import './Footer.css';
import FooterTitle from "./FooterTitle/FooterTitle";
import SocialContainer from "./socialContainer/SocialContainer";
import Ul from "./ul/Ul";

const Footer = ({data}) => {
    return (
        <footer>
            <div className='footer-content'>
                <img className='logo' src={require('../../../images/light-logo.png')} alt=""/>
                <div className='footer-ul-container'>
                    {data.map((item, index) => (
                        <Ul
                            key={index}
                            data={item}
                        />
                    ))}
                </div>
            </div>

            <FooterTitle/>

            <SocialContainer/>
        </footer>
    )
}

export default Footer;