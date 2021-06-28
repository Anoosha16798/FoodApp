import React, {Component, useState,useEffect} from 'react';
import IMAGES from '../../assets/images/index';
import '../../assets/styles/starter.scss';
import StarterData from './starterData';

const StarterPage =()=>{
return(
    <div className="starter-container">
        <div className="category">Starter</div>
        {StarterData.map((item,index)=>{
            return(
        <div className="card-container">  
        {console.log("Item Data",item.typeName)  }      
            <div className="left-container">
            <img className="type-logo" src={item.dishType} alt="veg"/>
            <div className="type-name">{item.typeName}</div>
            <div className="dish-description">{item.dishDesc}</div>
            <div>{item.price}</div>
            </div>
            <div className="right-container">
            <img className="dish-img" src={item.dishImage} alt ="Paneer"/>
            <div className="quantity"> + Add </div>
            </div>
        </div>
        )})}
    </div>

)
}
export default StarterPage;