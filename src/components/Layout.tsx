'use client'
import {LoginProvider} from '../context/LoginContext'
const Layout = ({ children }) => {
  return (
    <LoginProvider>
      <div>{children}</div>
    </LoginProvider>
  );
};

export default Layout;
