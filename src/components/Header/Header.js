import React,{useState,useEffect} from 'react';

import '../../assets/styles/header.scss';
import IMAGES from '../../assets/images/index';

const HeaderPage =()=>{
    const [openSubMenu,setOpenSubMenu]=useState(false);
    const [openSearchBar,setOpenSearchBar]=useState(false);
    return(
        <div className="header-container" onMouseLeave={()=>{return (setOpenSubMenu(false))}}>
        <div className="img-x-logo"><a href="/"><img src={IMAGES.logo} alt="Logo"/></a></div>
            <ul className="menu-items" >
            <li className="categories" onClick={()=>setOpenSubMenu(!openSubMenu)}>Categories
            <div className={openSubMenu?"sub-items":"no-items"}>
            <li className="sub-categories"><a href="Starter">Snacks </a></li>
            <li className="sub-categories"><a href="#">Meal</a></li>
            <li className="sub-categories"><a href="#">Beverages</a></li>
            <li className="sub-categories"><a href="#">Dessert</a></li>
            </div>
            </li>
            <li className="categories" onClick={()=>setOpenSearchBar(!openSearchBar)}>Search
                <div className={openSearchBar?"search-bar":"no-items"}>
                    <div className="search-icon"><img src={IMAGES.search} alt="Search"/></div>
                    <div className="search"></div>
                </div>
            
            </li>
            <li className="categories">Cart</li>
            </ul>
            <div className="img-x"><img src={IMAGES.avatar} alt="Avatar"/></div>

        </div>
    )
}
export default HeaderPage;