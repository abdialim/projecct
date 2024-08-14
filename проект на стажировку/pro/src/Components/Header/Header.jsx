import React from 'react';
import App from '../../App';
import './header.css';
import login from '../../img/icons/ic_sharp-log-in.svg'
import cart from '../../img/icons/bx_bx-cart.svg'
import saerch from '../../img/icons/gridicons_search.svg'

const Header = () => {
    return (
        <div className="container">
            <div className="contact">
                <p className='header-ph'>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p> 
                <p className='header-ph2'><img src={login} alt="" /> Войти / Регистрация</p>
            </div>
            <div className='nav'>
                <h1>Porten</h1>
                <ul>
                    <li>ПОНРАВИЛОСЬ</li>
                    <li>ЛИЧНЫЙ КАБИНЕТ</li>
                    <li>НАСТРОЙКИ</li>
                    <li><img src={cart} alt="" /></li>
                    <li><img src={saerch} alt="" /></li>
                </ul>
           
            </div>
        </div>
    );
}

export default Header;
