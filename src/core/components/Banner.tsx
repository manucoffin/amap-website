type Props = React.ComponentPropsWithoutRef<'svg'>;

const Banner = ({ className, ...props }: Props) => {
  return (
    <svg
      className={className}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 213.11 40.61"
    >
      {/* <defs>
        <style>{`.cls-1{fill:#a3cdd2;}`}</style>
      </defs> */}

      <path
        className="cls-1"
        d="M196.54,40.32s-37.59-1.51-50.1-1c-24.44,1-66.44-1-93.85,1-9,.66-25.59,0-36.13,0A3.47,3.47,0,0,1,13,36.86c0-4.13-1-13.4-1-17.54A88.75,88.75,0,0,1,13,3.78C13.34,1.91,14.56.32,16.46.32c0,0,37.15,1,49.54,1,15,0,46-1,61-1,11,0,24,1,45,0a219.47,219.47,0,0,1,24.54,0c1.9,0,3.05,1.6,3.46,3.46,1,4.54,1,10.54,1,16.54,0,4.82-1,16.54-1,16.54A3.47,3.47,0,0,1,196.54,40.32Z"
      />
      <path
        className="cls-1"
        d="M9.17,39.32H.85A.93.93,0,0,1,0,38.23c.91-4.66,3.91-13.1,3.84-17.91C3.79,16,.91,8.6,0,4.41A.92.92,0,0,1,.85,3.32H9.17A1,1,0,0,1,10,4.41s-.77,11.64-.77,15.52c0,4.58.77,18.3.77,18.3A1,1,0,0,1,9.17,39.32Z"
      />
      <path
        className="cls-1"
        d="M203.94,39.32h8.31a.93.93,0,0,0,.84-1.09c-.91-4.66-3.92-13.1-3.84-17.91.07-4.35,2.95-11.72,3.84-15.91a.93.93,0,0,0-.84-1.09h-8.31a1,1,0,0,0-.83,1.09s.77,11.64.77,15.52c0,4.58-.77,18.3-.77,18.3A1,1,0,0,0,203.94,39.32Z"
      />
    </svg>
  );
};

export default Banner;
