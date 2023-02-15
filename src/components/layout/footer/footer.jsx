import React from 'react';
import Logo from 'src/components/ui/logo/logo';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Logo/>
        <span className="footer__copyright">Создано 2021</span>
      </div>
    </footer>
  );
}

export default Footer;
