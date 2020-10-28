import React from 'react';

import Navbar from './components/Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    { children }
  </>
);