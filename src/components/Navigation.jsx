const Navigation = () => {


    return (
        <nav className="container">
        <div className="logo">
            <img src="/images/brand_logo.jpg" alt="logo"/>
        </div>
            <ul>

                <li href="#" className="a">MENU</li>
                <li href="#" className="b">LOCATION</li>
                <li href="#" className="c">ABOUT</li>
                <li href="#" className="d">CONTACT</li>
            </ul>

            <button className="login">Login</button>

        </nav>

    );

}
export default Navigation;