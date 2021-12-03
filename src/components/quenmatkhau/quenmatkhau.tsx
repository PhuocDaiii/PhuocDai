import React from 'react'
import logo from '../../assets/Login/Vector.png';
import anh1 from '../../assets/Login/Frame 923.png';
import anh2 from '../../assets/Login/Frame 924.png';
import anh3 from '../../assets/Login/Frame 931.png';
import ATM from '../../assets/Login/Group.png';
import bongcayatm from '../../assets/Login/bong.png';
import { Link } from 'react-router-dom';
import './quenmatkhau.css';


export default function quenmatkhau() {
    return (
        <div className="Login1">
            <div className="Hinhanh1">
                <img src={logo} alt="" className="icon12"/>
            </div>
            <div className="Content1">
                <div className="Contentleft1">
                    <img src={ATM} alt="" className="atm1"/>
                    <img src={anh1} alt="" className="hinh923"/>
                    <img src={anh2} alt="" className="hinh924"/>
                    <img src={anh3} alt="" className="hinh931"/>
                    <img src={bongcayatm} alt="" className="bongatm1"/>
                    <p className="iconpicture"></p>
                </div>
            <div className="Contentright">
                <h3 className="NameLogin">Quên mật khẩu</h3>
                <form className="Contentlogin">
                <br/><label className="tendangnhap">Email</label><br/>
                    <input  type="text" className="unamelogin" name="Uname" placeholder="altamedia@gmail.com"/><br/>
                    <Link to="/GuilaiEmail" className="Link">
                    <button type="button" className="btnGuilaiemail">
                        <p className="btnnutguilaiemail">Gửi lại email</p>
                    </button>
                    </Link>
                    
                </form>

                <Link to="/" className="Link">
               <p className="qmk"><u>Quay trở lại trang đăng nhập</u></p>
               </Link>
                
            </div>
        </div>
    </div>
    )
}
