// More on customizing the Admin panel:
// https://www.manuelkruisz.com/blog/posts/custom-previews-nextjs-netlifycms
import { useEffect } from 'react';
import { Widget as IdWidget } from '@ncwidgets/id';
import { config } from '../../public/admin/config.src';

const AdminPage = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.registerWidget(IdWidget.name, IdWidget.controlComponent);
      CMS.init({ config } as any); // TODO: type properly and enable eslint no-explicit-any rule
    })();
  }, []);

  return <div />;
};

export default AdminPage;
