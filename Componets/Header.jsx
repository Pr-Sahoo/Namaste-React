import LOGOURL from "./utils/constant";
const Header = () => {

    return (
        <div className="header">
            <div className="logo-container">
                {/* <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="food logo" /> */}
                <img src={LOGOURL} alt="food logo"  className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;