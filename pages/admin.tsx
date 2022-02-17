import dynamic from "next/dynamic";
import config from "../public/admin/config";

import { Widget as IdWidget } from "@ncwidgets/id";

const AdminComponent = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      (cms as any).registerWidget(IdWidget);
      (cms as any).init({ config });
      // return CMS;
    }) as any,
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage: React.FC = () => {
  return <AdminComponent />;
};

export default AdminPage;
