import ButtonGeneral from "../Button/ButtonGeneral";
import IconLogo from "../Icon/IconLogo";

const Header = () => {
  return (
    <div className="py-4 flex justify-between w-full">
      <IconLogo />
      <div className="flex gap-2.5">
      <ButtonGeneral text="Users" onClick={() => {}} />
      <ButtonGeneral text="Sign up" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Header;
