// More on customizing the Admin panel:
// https://www.manuelkruisz.com/blog/posts/custom-previews-nextjs-netlifycms
import { useEffect } from 'react';
import { Widget as IdWidget } from '@ncwidgets/id';
// import netlifyIdentity from 'netlify-identity-widget';
// import netlifyAuth from 'lib/netlify-auth.js';
import config from '../public/admin/config';

const AdminPage: React.FC = () => {
  // const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      // netlifyIdentity.init({
      //   APIUrl: 'https://amap-goutte-eau.netlify.app/.netlify/identity',
      //   locale: 'fr',
      // });
      CMS.registerWidget(IdWidget.name);
      CMS.init({ config } as any);
    })();
    // netlifyAuth.initialize((user) => {
    //   setLoggedIn(!!user);
    // });
  }, []);
  return <div />;
};

export default AdminPage;
