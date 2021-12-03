import React from 'react'
import './GSMHeader.css';
import Search from '../../assets/bentrai/Vector.png';


export default function GSMHeader() {
    return (
        <div className="Header" >
          <div>
            <p  className="NameHeader">Tìm điểm giám sát</p>
            </div>
            <p className="NameDiemgiamsat">Điểm giám sát</p>  
            <div className="search-text">
               <input type="" name="" placeholder="Điểm giám sát"></input>
               <img src={Search} alt="" className="searchicon"/>
            </div>
        </div>
    )
}
