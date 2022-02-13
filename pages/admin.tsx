import dynamic from "next/dynamic";
import config from "../public/admin/config";
const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
      // return CMS;
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);
const AdminPage: React.FC = () => {
  return <CMS />;
};
export default AdminPage;
