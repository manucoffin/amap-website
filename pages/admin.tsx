// More on customizing the Admin panel:
// https://www.manuelkruisz.com/blog/posts/custom-previews-nextjs-netlifycms
import { useEffect } from 'react';
import { Widget as IdWidget } from '@ncwidgets/id';
// import netlifyAuth from 'lib/netlify-auth.js';
import config from '../public/admin/config';

const AdminPage: React.FC = () => {
  // const [user, setUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

  // const login = () => {
  //   netlifyAuth.authenticate((user) => {
  //     setLoggedIn(!!user);
  //     setUser(user);
  //     netlifyAuth.closeModal();
  //   });
  // };

  // const logout = () => {
  //   netlifyAuth.signout(() => {
  //     setLoggedIn(false);
  //     setUser(null);
  //   });
  // };

  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.registerWidget(IdWidget.name);
      CMS.init({ config } as any);
    })();

    // netlifyAuth.initialize((user) => {
    //   setLoggedIn(!!user);
    // });
  }, []);

  return (
    <div></div>
    // <>
    //   {loggedIn ? (
    //     <div>
    //       You are logged in!
    //       {user && <>Welcome {user?.user_metadata.full_name}!</>}
    //       <br />
    //       <button onClick={logout}>Log out here.</button>
    //     </div>
    //   ) : (
    //     <button onClick={login}>Log in here.</button>
    //   )}

    // </>
  );
};

export default AdminPage;
