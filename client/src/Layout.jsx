import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = ['/UserLogin', '/UserRegister'].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;