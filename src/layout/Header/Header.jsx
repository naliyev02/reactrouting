import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1>Header</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/shop'>Shop</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header