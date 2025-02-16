import path from 'path'
import React from 'react'
import { Link, NavLink } from 'react-router'
import { InteractiveHoverButton , ShinyButton , ScrollProgress } from '../ui'
import useStore from '../context/store'
import { CartIcon } from '@/media'

function Navbar() {
  const shopName = useStore((state) => state.shopName)
  const cartItems = useStore((state) => state.cartItems)

  const NavList = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",  
      path: "/shop",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ]

  return (
    <>
    <div className="navbar bg-shadyCn sticky top-0 z-50">
  <div className="navbar-start">
    <Link className=" ml-4 text-xl font-semibold">
    {shopName}
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavList.map((item) => (
        <li className='mx-1' key={item.title}>
          <NavLink
            to={item.path}
            className={( {isActive}) => ` font-semibold hover:text-white ${isActive ? 'text-white' : 'text-gray-500 '} ` }>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center justify-center gap-2">
      {/* <Link to="/cart" className="text-white">
        <CartIcon className="w-6 h-6" />
      </Link> */}
      <Link to="/cart">
        <ShinyButton>
          <div className="flex items-center justify-center gap-1">
          <CartIcon className="w-6 h-6" />
          <span className='text-xs rounded-full p-1' >{cartItems.length}</span>
          </div>
        </ShinyButton>
      </Link>
    </div>
  </div>
</div>
<ScrollProgress className="top-[65px]" />
</>
  )
}

export default Navbar