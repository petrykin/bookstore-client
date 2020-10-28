import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => (
  <section className='page'>
    <h1>Admin Dashboard</h1>
    <section className='comment'>
      <Link to = '/profile'>
        View Profile
      </Link>
    </section>
    <section className='comment'>
      <Link to = '/users'>
        View Users
      </Link>
    </section>
    <section className='comment'>
      <Link to = '/books'>
        View Books
      </Link>
    </section>
  </section>
);

export default DashboardPage;