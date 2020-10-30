import React from 'react';
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <section>
        <div>
          <a href='#'>Brand name</a>
        </div>
        <div>
          <Link to = '/'>Dashboard</Link>
          <Link to = '/admin/books'>ABs</Link>
          <Link to = '/books'>UBs</Link>
          <Link to = '/auth'>Auth Mock</Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;