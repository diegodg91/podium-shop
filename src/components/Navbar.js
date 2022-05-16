const Navbar = () => {
    return(
        <header className="header">
        <nav className="nav__menu">
            <div className="nav__brand">
                <h3>Podium shop</h3>
            </div>
            <ul className="nav__items">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#products">Productos</a>
                </li>
                <li>
                    <a href="#faq">FAQ</a>
                </li>
                <li>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
            <div className="nav__items-cart">
                <a href="#cart">Carrito</a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;