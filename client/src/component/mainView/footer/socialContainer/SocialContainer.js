import './SocialContainer.css';
import Wrapper from "../../../../helper/Wrapper";

const SocialContainer = () => {
    return (
        <Wrapper>
            <div className="footer-social-container">
                <div>
                    <a href="#" className="social-link">terms & services</a>
                    <a href="#" className="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" className="social-link">instagram</a>
                    <a href="#" className="social-link">facebook</a>
                    <a href="#" className="social-link">twitter</a>
                </div>
            </div>
            <p className="footer-credit">Clothing, Best apparels online store</p>
        </Wrapper>
    )
}

export default SocialContainer;