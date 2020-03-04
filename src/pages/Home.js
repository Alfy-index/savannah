import React from 'react'
import NavBar from "../components/NavBar";
import "./home.css"
import Contacts from "../components/Contacts";
import UserLogin from "../components/Login";
import UserSignUp from "../components/SignUp";
import FeaturedProperties from "../components/FeaturedProperties";

const Home = () => {
    return (
        <div>
        <div className='contactInfo'>
            <div><Contacts/></div>
             <div className='loginSignUp'>
                <div className='div-col1'>
                    <UserLogin/>
                </div>
                <div className='div-col2'>
                    <UserSignUp/>
                </div>
             </div>
          </div>
        <div className="homeComponent">
            <div>
                <NavBar />
            </div>
            <div className='aboutComponent'>
                <div className = 'image1'>
                    <img src= 'images/exterior-a.jpg' alt="house" />
                </div>
                <div className="about">
                    <h2>About Finsal Savannah</h2>
                    <p>
                        FinSAL Savannah is a limited company registered under the laws of Kenya.
                        Our key focus is providing creative solutions to problems that affect the
                        African continent through the use of technology and innovative financial models.
                    </p>
                </div>
            </div>
            <div className='latestListing'>
                <h2>Latest Listing</h2>
            </div>
            <div className='featuredSection'>
                <button><FeaturedProperties img src = 'images/image2.jpg' /></button>
                <button>
                    <FeaturedProperties
                        description = '1 Bedroom Apartment for Rent at Menyinkwa Kisii Town'
                />
                </button>
                <button><FeaturedProperties /></button>

            </div>

        </div>
        </div>



    )
}
export default Home
