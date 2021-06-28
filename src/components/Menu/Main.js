import React,{Component, useState,useEffect} from 'react';
import '../../assets/styles/main.scss';
import IMAGES from '../../assets/images/index'

const MainPage=()=>{
    return(
        <div className="main-container">
        <div className="menupage-container">
            <div className="left-container">
            <div className="text">Order Tasty & Fresh Food <p>Anytime!</p></div>
            <div className="sub-text">Just Confirm Your Order and Enjoy Your Delicious Food.</div>
            <div>
                <a href="Menu" className="button">Order Now</a>
                <a href="Menu" className="menu-link">See Menu</a>
            </div>
            </div>
            <div className="right-container">
                <img className="home-page-img" src={IMAGES.homePageImg}/>
            </div> 
        </div>
        </div>
    )
}
export default MainPage;