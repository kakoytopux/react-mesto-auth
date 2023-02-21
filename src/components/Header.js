import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const { signLink, signText, userEmail } = props;
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <header className={`header ${menu && 'header_active'}`}>
      <a href="#" className="header__logo-link" title="Mesto"></a>
      {localStorage.getItem('token') ?
      <>
      <div className={`header__container ${menu && 'header__container_active'}`}>
        <p className="header__user-email">{userEmail}</p>
        <button onClick={onExitProfile} type="button" className="header__profile-exit">Выйти</button>
      </div>
      <button type="button" onClick={menuStatus} className={`header__burger-menu ${menu && 'header__burger-menu_active'}`}>
        <div className="header__burger-menu-container" style={menu && {display: 'hidden'}}>
          <div className="header__burger-menu-line"></div>
          <div className="header__burger-menu-line"></div>
          <div className="header__burger-menu-line"></div>
        </div>
      </button>
      </> :
      <Link to={signLink} className="header__sign">{signText}</Link>
      }
    </header>
  );
  function onExitProfile() {
    localStorage.removeItem('token');
    navigate('/sign-in');
  }
  function menuStatus() {
    setMenu(true);
  }
}