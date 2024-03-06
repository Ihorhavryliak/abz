type ButtonGeneralType = {
  disabled?: boolean;
  onClick?: () => void;
  text: string;
};

const ButtonGeneral = ({ onClick, disabled, text }: ButtonGeneralType) => {
  return (
    <button
      className="text-custom-black-100 hover:bg-custom-yellow-200 disabled:bg-custom-gray-100 disabled:text-white cursor-pointer font-nunito text-base leading-162 text-center bg-custom-yellow-100 px-[23px] py-1 rounded-[80px]"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonGeneral;
