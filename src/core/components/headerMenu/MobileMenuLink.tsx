import Link from "next/link";
import { A } from "src/core/components/ui";

export const MobileMenuLink = (props) => {
  const { href, children, ...rest } = props;

  return (
    <Link href={href} passHref>
      <A className="block font-medium whitespace-nowrap" {...rest}>
        {children}
      </A>
    </Link>
  );
};
