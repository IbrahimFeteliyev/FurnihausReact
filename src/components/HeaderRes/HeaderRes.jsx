import { useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "../HeaderRes/headerres.scss";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <Link to="/"><img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/05/logo.png" alt="" /></Link>

            <nav ref={navRef}>
                <Link to="/">FURNITURE</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/allblogs">BLOG</Link>
                <Link to="/contact">CONTACT</Link>
                {/* <SearchIcon />
                    <Link to="/favourite">
                        <FavoriteBorderIcon style={{ color: "black" }} />
                    </Link>
                    <Link to="/cart">
                        <AddShoppingCartIcon style={{ color: "black" }} />
                    </Link> */}



                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <CloseIcon />
                </button>

            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <MenuIcon />
            </button>
        </header>
    );
}

export default Navbar;