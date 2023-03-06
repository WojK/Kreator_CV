import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import './navbar.css'

const Navbar = () => {
    return (
        <div className='cv__navbar'>
            <div className='cv__navbar-logo'>
                <p>CV CREATOR</p>
            </div>
            <div className='cv__navbar-links'>
                <div className='cv__navbar-links_container'>
                    <p><AiFillCaretDown color="#fff" size={20} /><a href="#home">Creator</a></p>
                    <p><AiFillCaretDown color="#fff" size={20} /><a href="#home">Advices</a></p>
                    <p><AiFillCaretDown color="#fff" size={20} /><a href="#home">About us</a></p>
                </div>

                <div className='cv__navbar-account'>
                    <button type='button'>My account</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar