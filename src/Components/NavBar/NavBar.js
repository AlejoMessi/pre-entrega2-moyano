import "./styles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useRef } from "react";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

function NavBar() {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="header">
            <div className="header__content">
                <div className="header__content-logo">
                        <Link to="/">
                            <img className="icono" src="https://4.bp.blogspot.com/_hQ2HrbS_zzA/RuiCTx760aI/AAAAAAAAAAU/VdngiB8ZyVs/s320/logo-osos.jpg" alt="Logo App" />
                        </Link>
                </div>
                <div className="header__content-menu">
                    <nav ref={ navRef }>
                        <Link to="/">
                            <button className="nav-link">Inicio</button>
                        </Link>
                        <Link to="/category/Vodka">
                            <button className="nav-link">Vodka</button>
                        </Link>
                        <Link to="/category/Aperitivo">
                            <button className="nav-link">Aperitivo</button>
                        </Link>
                        <Link to="/category/Energizante">
                            <button className="nav-link">Energizante</button>
                        </Link>
                        <Link to="/category/Gaseosa">
                            <button className="nav-link">Gaseosa</button>
                        </Link>
                                <button className='nav-btn nav-close-btn' onClick={ showNavBar }>
                                    <FaTimes />
                                </button>
                    </nav>
                    <div className="cart">
                        <div>
                            <button className='nav-btn' onClick={ showNavBar }>
                                <FaBars />
                            </button>
                        </div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;