import React from 'react';
import Logo from 'src/components/ui/logo/logo';
import Nav from 'src/components/layout/nav/nav';
import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo/>
        <Nav/>
      </div>
    </header>
  );
}

export default Header;
