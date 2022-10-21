import React,{useState, useEffect} from 'react'
import {AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'
import './navbar.css'
// import image from '../../images/image-avatar.png'
import { useSelector } from 'react-redux'
import Collections from '../Collections/Collections'



const Navbar = () => {



const cartItem = useSelector((state) => state.counter.cart)
const cartLength = cartItem.length

const [navPosition, setNavPosition] = useState(-1)

const [cart, setCart] = useState(false);

const navList = ['collections', 'men', 'women', 'about', 'contact'];
const [navbar, setNavbar] = useState(false)

const handleClick = (index) => {
  setNavPosition(index)
}

const showCart = () => {
    setCart(prev => !prev)
}





    const showNavbar = () => {
        if(window.innerWidth < 600){
            setNavbar(true)
        }
            
    }

    // useEffect(() => {
    //     setNavbar(!navbar)
    // }, [])

   


  return (
    <div className='nav-container'>

       <div className='navbar'>
        <div className='logo'>
                <button className='bar-btn' onClick={showNavbar}><FaBars className='bar-icon' /></button>
                <Link to='/'><h1>Wedding Store</h1></Link>
            </div>


            <div className='links'>
                <ul>
                    {navList.map(
                        (item, index) => <Link 
                        onClick={() => handleClick(index) } 
                        key={index} 
                        className={index===navPosition ? 'active':null} to={'/'+item}><li>{item}</li></Link>
                    )}
            
                </ul>
            </div>

            <div className='combine'>
                
                        <div className='icon-container' onClick={showCart}>
                            <div className="counter">
                                <AiOutlineShoppingCart className='cart-icon' />
                                <small>{cartLength}</small>
                            </div>
                            <Cart show={cart} />
                        </div>
                

           

            </div>

            
       </div>

<div className="thin-line"></div>

    {navbar ? <SideNav setNavbar={setNavbar} /> : null}

    </div>
  )
}

export default Navbar




export const SideNav = ({setNavbar}) => {

    
    return(
        <>
        {/* { sidebar ? '' : <Collections />} */}
            <div className="sidenav-modal">
                <div className='sidenav-container'>
                    <button className='sidenav-btn' onClick={() => setNavbar(false)}><AiOutlineClose className='close-icon' /></button>
                    <ul className='sidenav-links' onClick={() => setNavbar(false)}>
                        <Link to='/collections'><li>Collections</li></Link>
                        <Link to='/men'><li>Men</li></Link>
                        <Link to='/women'><li>Women</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </div> 
        </>
    )
}



