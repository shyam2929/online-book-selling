import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className="item">
                    <img src="/image/in.png" alt='' style={{ width: '20px', height: '20px', border: '1px', }} />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>INR</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                   <Link className="link" to="/products/1">Fiction</Link>
                </div>
                <div className="item">
                   <Link className="link" to="/products/2">Non-Fiction</Link>
                </div>
                <div className="item">
                   <Link className="link" to="/products/3">Competition</Link>
                </div>
            </div>
            <div className='center'>
               <Link className="link" to="/">Poet's Papyrus</Link>
            </div>
            <div className='right'>
                <div className='items'>
                   <Link className="link" to="/">Homepage</Link>
                </div>
                <div className='items'>
                   <Link className="link" to="/">About</Link>
                </div>
                <div className='items'>
                   <Link className="link" to="/">Contact</Link>
                </div>
                <div className='items'>
                   <Link className="link" to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderOutlinedIcon/>
                
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Navbar
