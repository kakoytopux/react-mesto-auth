import React from "react";
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { signLink, signText } = props;
  return (
    <header className="header">
      <a href="#" className="header__logo-link" title="Mesto"></a>
      <Link to={signLink} className="header__sign">{signText}</Link>
    </header>
  );
}