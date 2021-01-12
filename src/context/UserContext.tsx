import React, { createContext, FC, useState } from 'react';
import { IUser, IUserContext } from '../type';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext<IUserContext>({
  userState: {
    user: null
  },
  userActions: {
    login: (_username: string, _password: string) => {},
    logout: (_arg: React.MouseEvent) => {}
  }
});

export const UserProvider: FC = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(JSON.parse(localStorage.getItem('user') || '{}'));

  const handleLogin = async (username: string, password: string) => {
      const res = await fetch('http://localhost:3001/login', {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify({'email': username, 'password': password})
      }).catch(() => ({ status: 401, message: 'Unauthorized' }));
      // @ts-ignore
    const data = await res.json();
      // @ts-ignore
    const { email } = jwt_decode(data.accessToken);
      const user = {
        email,
        token: data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      };

      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = (e: React.MouseEvent) => {
      e.preventDefault();
      setUser(null);
      localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{
      userState: { user },
      userActions: {
        login: handleLogin,
        logout: handleLogout
      }
    }}>
      { children }
    </UserContext.Provider>
  );
};