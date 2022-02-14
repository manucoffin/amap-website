import clsx from "clsx";
import { Footer } from "components";
import { Footer as FooterData } from "lib/netlify-types";

interface Props extends React.PropsWithoutRef<JSX.IntrinsicElements["main"]> {
  footerData: FooterData;
  minimalFooter?: boolean;
}

export const MainLayout = ({ footerData, minimalFooter, ...props }: Props) => {
  return (
    <>
      <main {...props} />

      <Footer data={footerData} minimal={minimalFooter} />
    </>
  );
};
