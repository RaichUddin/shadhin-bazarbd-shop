import React from 'react';
import './Header.css';
import logo from '../../../logo-png.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useStateValue } from '../../../Hooks/StateProvider';


const Header = () => {
    const { user, logout, display } = useAuth();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header-nav'>

            <Link to="/">
                <img src={logo} alt="" />
            </Link>

            <div className='header-search'>
                <input
                    className='search-input'
                    type="text"
                    placeholder='search'
                />
                <SearchIcon
                    className='header-searchIcon'
                />
            </div>
            <div className='header-navbar'>

                <Link to='/createsign'>
                    <div className='header-option'>
                        <span className='header-optionLineOne'>Hello {display}</span>

                        {
                            user?.email ?
                                <span onClick={logout} className='header-optionLineTwo'>Logout</span>
                                :
                                <span className='header-optionLineTwo'>Sign In</span>

                        }

                    </div>
                </Link>

                <div className='header-option'>
                    <span className='header-optionLineOne'>Returns</span>
                    <span className='header-optionLineTwo'> & Orders</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Your</span>
                    <span className='header-optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    );
};

export default Header;