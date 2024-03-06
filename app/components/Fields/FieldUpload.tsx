import classNames from "@/app/utils/classNames";
import React, { useState, ChangeEvent } from "react";

type FieldUploadType = {
  error?: string;
};
const FieldUpload = ({ error }: FieldUploadType) => {
  const [fileSelected, setFileSelected] = useState<File | undefined>(undefined);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileSelected(selectedFile);
  };
  return (
    <div className="font-nunito max-w-[328px] w-full cursor-pointer">
      <label>
        <div className="flex h-[54px]">
          <div
            className={classNames(
              error ? "border-custom-red-100 border-2" : " border border-black",
              "text-base leading-162 text-center px-[15px] py-3.5 rounded-s"
            )}
          >
            Upload
          </div>
          <div
            className={classNames(
              error
                ? "border-custom-red-100 border-2"
                : "border-custom-gray-200 border",
              fileSelected ? "text-black-100" : "text-custom-gray-300",
              "w-full  py-3.5 ps-4 border-s-0 rounded-e"
            )}
          >
            {fileSelected ? fileSelected?.name : "Upload your photo"}
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          accept=".png, .jpg, .jpeg, .gif"
          onChange={handleFileChange}
          // Add other input attributes as needed
        />
      </label>
      {error && (
        <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default FieldUpload;
