import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { UserContext } from '../../context/UserContext';
import { IUserContext } from '../../type';

export const Navbar: FC = () => {
  const { userState: { user }, userActions: { login, logout } } = useContext<IUserContext>(UserContext);

  return (
    <nav>
      <section>
        <div className='navbar-item'>
          <Link to='/'>Book Store</Link>
        </div>
        <div>
          <h4>{user?.email && `Hello, ${ user.email }`}</h4>
        </div>
        <div>
          {user?.email &&
            <Link to='/books/manage'><Icon name='edit outline' /> Manage Books</Link>
          }
          <Link to='/books'><Icon name='book' /> Books</Link>
          {user?.email &&
            <Link to='/cart'><Icon name='cart' /> Cart</Link>
          }
          {!user?.email ? (
            <Link to='/' className='navbar-item' onClick={() => login('admin@example.com', 'password')}>
              Login
            </Link>
          ) : (
            <Link to='/' onClick={logout} className='navbar-item'>
              Logout
            </Link>
          )}
        </div>
      </section>
    </nav>
  );
};
