import { useEffect, useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "../HeaderRes/headerres.scss";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../redux/Actions/UserAction";
import { BASE_URL } from "../../api/Config";


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    const [category, setCategory] = useState([]);
    const { userInfo } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const countTotal = () => {
        var price = 0;
        cartItems.map((cart) => {
            price += cart.price * cart.quantity;
        });
        setTotalPrice(price);
    };

    const logOut = () => {
        dispatch(logoutUserAction())
        navigate("/")
    }

    const getCategories = async () => {
        await fetch(BASE_URL + "category/getallchild")
            .then((a) => a.json())
            .then((data) => setCategory(data));
    };

    useEffect(() => {
        countTotal();
        getCategories();
    }, [totalPrice, cartItems, userInfo]);


    return (
        <header>
            <Link to="/"><img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/05/logo.png" alt="" /></Link>

            <nav className="d-flex align-items-center" ref={navRef}>
                {/* <SearchIcon /> */}

                <Link onClick={showNavbar} to="/">FURNITURE</Link>
                <Link onClick={showNavbar} to="/shop">SHOP</Link>
                <Link onClick={showNavbar} to="/allblogs">BLOG</Link>
                <Link onClick={showNavbar} to="/contact">CONTACT</Link>

                <Link onClick={showNavbar} to="/favourite">
                    <FavoriteBorderIcon style={{ color: "black" }} />
                </Link>
                <Link onClick={showNavbar} to="/cart">
                    <AddShoppingCartIcon style={{ color: "black" }} />
                </Link>
                <div className="user">

                    <span><AccountCircleIcon />Account</span>
                    <div className="account-all">
                        {
                            userInfo.length === 0 ? (
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                </Link>
                            ) : (
                                <Link onClick={showNavbar} to='/account' style={{ textDecoration: "none" }}>
                                    <li>Hesabım</li>
                                </Link>
                            )
                        }
                        {
                            userInfo.length === 0 ? (
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <li onClick={showNavbar}>Giriş</li>
                                </Link>
                            ) : (
                                <Link onClick={showNavbar} to="/" style={{ textDecoration: "none" }}>
                                    <li  onClick={() => logOut()}>Çıxış</li>
                                </Link>
                            )
                        }
                    </div>
                </div>
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