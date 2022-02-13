import clsx from "clsx";
import { Footer } from "components";
import { Footer as FooterData } from "lib/netlify-types";

interface Props extends React.PropsWithoutRef<JSX.IntrinsicElements["main"]> {
  footerData: FooterData;
}

export const MainLayout = ({ footerData, ...props }: Props) => {
  return (
    <>
      <main {...props} />

      <Footer data={footerData} />
    </>
  );
};
