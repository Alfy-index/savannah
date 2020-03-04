import React from 'react'
import './NavBar.css'
const NavBar = () =>{
    return (
        <nav className="navbar justify-content-between">
            <div className="text-block-4">
                <img src="images/logo1.png" alt = 'Logo' />
            </div>
              <div className="text-block-4">
                <a className="navbar-brand" href="">Home</a>
              </div>
              <div className="text-block-4">
                    <a href="">Products and Services</a>
              </div>
              <div className="text-block-4">
                    <a href="">For Rent</a>
              </div>
              <div className="text-block-4">
                    <a href="">For Sale</a>
              </div>
              <div className="text-block-4">
                    <a href="">Listings</a>
              </div>
              <div className="text-block-4">
                    <a href="">Land</a>
              </div>
        </nav>
    )
}
export default NavBar