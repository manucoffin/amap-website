import { createContext, useEffect, useState } from 'react';
import { netlifyIdentity } from 'netlify-identity-widget';

interface IAuthContext {
  user: any;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // on login
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    // on logout
    netlifyIdentity.on('logout', () => {
      setUser(null);
    });

    // connect with Netlify Identity
    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
