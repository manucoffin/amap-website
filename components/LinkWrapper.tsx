import Link from "next/link";

export const LinkWrapper = (props, Component) => {
  return (
    <Link href={props.href}>
      <Component {...props} />
    </Link>
  );
};
