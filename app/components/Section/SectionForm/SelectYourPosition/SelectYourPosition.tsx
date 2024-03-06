import Each from "@/app/components/Eatch/Each";
import InputRadio from "@/app/components/Input/InputRadio";
import React from "react";

type ProfessionDataType = {
  id: number;
  name: string;
  onClick: (id: number) => void;
  checked: boolean;
};

const professionData = [
  {
    id: 1,
    name: "Frontend developer",
    onClick: (id: number) => {},
    checked: false,
  },
  {
    id: 2,
    name: "Backend developer",
    onClick: (id: number) => {},
    checked: false,
  },
  {
    id: 3,
    name: "Designer",
    onClick: (id: number) => {},
    checked: false,
  },
  {
    id: 4,
    name: "QA",
    onClick: (id: number) => {},
    checked: false,
  },
];

const SelectYourPosition = () => {
  return (
    <div>
      <h2 className="font-nunito text-custom-black-100 text-[40px] leading-[100%] text-center">
        Working with GET request
      </h2>
      <div className="flex flex-col gap-2.5 mt-[11px]">
        <Each
          of={professionData}
          render={(
            { checked, id, name, onClick }: ProfessionDataType,
            index: number
          ) => (
            <InputRadio
              value={name}
              onClick={() => onClick(id)}
              checked={checked}
            />
          )}
        />
      </div>
    </div>
  );
};

export default SelectYourPosition;
