// More on customizing the Admin panel:
// https://www.manuelkruisz.com/blog/posts/custom-previews-nextjs-netlifycms
import { useEffect } from 'react';
import { Widget as IdWidget } from '@ncwidgets/id';
// import { config } from '../../public/admin/config.src';
import config from '../../public/admin/config';

// const config = {}

const AdminPage = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.registerWidget(IdWidget.name, IdWidget.controlComponent);
      CMS.init({ config }); // TODO: type properly
      // CMS.init();
    })();
  }, []);

  return <div />;
};

export default AdminPage;
