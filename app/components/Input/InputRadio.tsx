import classNames from "@/app/utils/classNames";
import React from "react";

type InputRadioType = {
  checked?: boolean;
  onClick: () => void;
  value: string;
};

const InputRadio = ({ checked, onClick, value }: InputRadioType) => {
  return (
    <div className="flex items-center gap-3 h-5">
      <div className="group cursor-pointer">
        <div
          onClick={onClick}
          className={classNames(
            checked ? "border-custom-blue-100" : "border-custom-gray-200",
            "w-5 h-5 rounded-full border  relative group-hover:border-custom-blue-100 "
          )}
        >
          <span
            className={classNames(
              checked && "bg-custom-blue-100",
              "w-2.5 h-2.5 rounded-full absolute left-1 top-1 group-hover:bg-custom-blue-100"
            )}
          ></span>
        </div>
      </div>

      <div className=" font-nunito text-base leading-162 text-custom-black-100">
        {value}
      </div>
    </div>
  );
};

export default InputRadio;
