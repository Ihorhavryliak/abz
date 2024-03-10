import classNames from '@/utils/classNames'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputGeneralType = {
  error?: string
  label?: string
  type?: string
  register: UseFormRegisterReturn
  value: FileList
}

const FieldUpload = ({ error, register, value }: InputGeneralType) => {

  return (
    <div className="font-nunito  w-full cursor-pointer relative">
      <label>
        <div className="flex h-[54px]">
          <div
            className={classNames(
              error ? 'border-custom-red-100 border-2' : ' border border-black',
              'text-base leading-162 text-center px-[14.5px] py-3.5 rounded-s'
            )}
          >
            Upload
          </div>
          <div
            className={classNames(
              error ? 'border-custom-red-100 border-2' : 'border-custom-gray-200 border',
              value ? 'text-custom-black-100' : 'text-custom-gray-300',
              'w-full  py-3.5 ps-4 border-s-0 rounded-e truncate h-[54px]'
            )}
          >
            {value && value[0]?.name  ? value[0].name : 'Upload your photo'}
          </div>
        </div>
        <input className="hidden" type="file" accept=".jpg, .jpeg" {...register} />
      </label>
      {error && <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1 absolute">{error}</div>}
    </div>
  )
}

export default FieldUpload
