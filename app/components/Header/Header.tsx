import ButtonGeneral from "../Button/ButtonGeneral";
import LogoIcon from "../Icon/LogoIcon";

const Header = () => {
  return (
    <div className="px-[60px] py-4 flex justify-between w-full">
      <LogoIcon />
      <div className="flex gap-2.5">
      <ButtonGeneral text="Users" onClick={() => {}} />
      <ButtonGeneral text="Sign up" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Header;
