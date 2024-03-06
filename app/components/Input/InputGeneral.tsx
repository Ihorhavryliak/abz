import classNames from "@/app/utils/classNames";
import {
  ChangeEvent,
  useState,
} from "react";

type InputGeneralType = {
  error?: string;
  label?: string;
};
const InputGeneral = ({ error, label }: InputGeneralType) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  console.log(value, "value>>");
  const handleBlur = () => {
    setIsFocus((prev) => !prev);
  };
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="relative font-nunito">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleOnChange}
          type="text"
          id="floating_outlined"
          className={classNames(
            error
              ? "border-custom-red-100 border-2"
              : "border-custom-gray-200 border",
            value ? "text-custom-black-100" : "text-custom-gray-300",
            "w-full py-3.5 ps-4 rounded focus:outline-none peer"
          )}
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className={classNames(
            error ? "text-custom-red-100" : "text-custom-gray-300",
            isFocus || value ? "text-xs" : "text-base",
            "font-medium ms-2 absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 duration-300"
          )}
        >
          {label && label}
        </label>
      </div>
      {error && (
        <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputGeneral;
