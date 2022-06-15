// More on customizing the Admin panel:
// https://www.manuelkruisz.com/blog/posts/custom-previews-nextjs-netlifycms
import { useEffect } from 'react';
import { Widget as IdWidget } from '@ncwidgets/id';
import { config } from '../../public/admin/config.src';

// import Link from 'next/link';
// import { useContext } from 'react';
// import { AuthContext } from '@core/contexts/AuthContext';

// const NavBar = () => {
//   const { user, login, logout } = useContext(AuthContext);
//   return (
//     <nav>
//       <Link href="/">
//         <a>Home</a>
//       </Link>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//       <li>{!user && <button onClick={login}>Login/Signup</button>}</li>
//       <li>{user && <button onClick={logout}>Logout</button>}</li>
//     </nav>
//   );
// };

const AdminPage = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.registerWidget(IdWidget.name, IdWidget.controlComponent);
      CMS.init({ config } as any); // TODO: type properly and enable eslint no-explicit-any rule
    })();
  }, []);

  return <div>{/* <NavBar /> */}</div>;
};

export default AdminPage;
