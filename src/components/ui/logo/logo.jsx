import React from 'react';
import logo from '/src/assets/logo.svg';
import './style.css';

function Logo() {
  return (
    <a className="logo__link" href="#">
      <img src={logo} width="44" height="44" alt="Логотип Котокафе"/>
      <span className="logo__text">Котокафе</span>
    </a>
  );
}

export default Logo;
