type ButtonGeneralType = {
  disabled?: boolean;
  onClick: () => void;
  text: string;
};

const ButtonGeneral = ({ onClick, disabled, text }: ButtonGeneralType) => {
  return (

    <button
      className="cursor-pointer font-nunito text-base leading-162 text-center bg-custom-yellow px-[23px] py-1"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonGeneral;
