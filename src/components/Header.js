import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "../asset/style/Header.scss";

function Header(props) {
  const [header, setHeader] = useState(false);
  
  const activeHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll', activeHeader);
    return () => {
      window.removeEventListener('scroll', activeHeader); 
    };
  },[])


  return (
    <header className={header ? "active" : ""}>
      <div className="header_wrap">
        <div className="logo">
          <p>
            <a href="#">Portflio</a>
          </p>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
