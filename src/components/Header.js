import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const { signLink, signText, userEmail } = props;
  const navigate = useNavigate();
  return (
    <header className="header">
      <a href="#" className="header__logo-link" title="Mesto"></a>
      {localStorage.getItem('token') ?
      <>
      <div className="header__container">
        <p className="header__user-email">{userEmail}</p>
        <button onClick={onExitProfile} type="button" className="header__profile-exit">Выйти</button>
      </div>
      <div className="header__burger-menu">
        <div className="header__burger-menu-line"></div>
        <div className="header__burger-menu-line"></div>
        <div className="header__burger-menu-line"></div>
      </div>
      </> :
      <Link to={signLink} className="header__sign">{signText}</Link>
      }
    </header>
  );
  function onExitProfile() {
    localStorage.removeItem('token');
    navigate('/sign-in');
  }
}