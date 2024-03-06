import React from "react";
import InputGeneral from "../../Input/InputGeneral";
import SelectYourPosition from "./SelectYourPosition/SelectYourPosition";
import ButtonGeneral from "../../Button/ButtonGeneral";
import FieldUpload from "../../Fields/FieldUpload";

const SectionForm = () => {
  return (
    <div>
      <h2 className="font-nunito text-custom-black-100 text-[40px] leading-[100%] text-center">
        Working with GET request
      </h2>
      <div className=" flex justify-center">
        <form className="max-w-[380px] w-full">
          <div>
            <div className="mt-[50px]">
              <InputGeneral label="Your name" />
            </div>
            <div className="mt-[50px]">
              <InputGeneral label="Email" type="email" />
            </div>
            <div className="mt-[50px]">
              <InputGeneral
                phone={"+38 (XXX) XXX - XX - XX"}
                label="Phone"
                type="number"
              />
            </div>
            <div className="mt-[43px]">
              <SelectYourPosition />
            </div>
            <div className="mt-[50px]">
              <FieldUpload  />
            </div>
            <div className="mt-[50px] flex justify-center">
              <ButtonGeneral text="Sign up" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionForm;
