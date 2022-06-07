interface MenuSectionHeadingProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const MenuSectionHeading: React.FC<MenuSectionHeadingProps> = ({ Icon, label }) => {
  return (
    <>
      <div className="uppercase mt-4 text-sm md:text-xs mb-2 font-bold tracking-widest flex items-center">
        {Icon ? <Icon className="w-5 mr-3 md:w-4 md:mr-2" /> : null}
        <span>{label}</span>
      </div>
    </>
  );
};

export default MenuSectionHeading;
