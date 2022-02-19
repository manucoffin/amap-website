// More on customizing the Admin panel:
// https://www.manuelkruisz.com/blog/posts/custom-previews-nextjs-netlifycms
import config from "../public/admin/config";
import { Widget as IdWidget } from "@ncwidgets/id";
import { useEffect } from "react";

const AdminPage: React.FC = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.registerWidget(IdWidget.name);
      CMS.init({ config } as any);
    })();
  }, []);
  return <div />;
};

export default AdminPage;
