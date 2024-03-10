import classNames from '@/utils/classNames'
import React from 'react'
import { DataInputType, InputFieldNameKeyType } from '../Section/SectionForm/hooks/useFormData'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputGeneralType = {
  item: DataInputType
  error?: string
  label?: string
  type?: string
  register: UseFormRegisterReturn
  value: string
}

const FieldUpload = ({ error, register, item, value }: InputGeneralType) => {
  return (
    <div className="font-nunito max-w-[328px] w-full cursor-pointer">
      <label>
        <div className="flex h-[54px]">
          <div
            className={classNames(
              error ? 'border-custom-red-100 border-2' : ' border border-black',
              'text-base leading-162 text-center px-[15px] py-3.5 rounded-s'
            )}
          >
            Upload
          </div>
          <div
            className={classNames(
              error ? 'border-custom-red-100 border-2' : 'border-custom-gray-200 border',
              value ? 'text-custom-black-100' : 'text-custom-gray-300',
              'w-full  py-3.5 ps-4 border-s-0 rounded-e'
            )}
          >
            {value ? 'value?..' : 'Upload your photo'}
          </div>
        </div>
        <input className="hidden" type="file" accept=".jpg, .jpeg" {...register} />
      </label>
      {error && <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1">{error}</div>}
    </div>
  )
}

export default FieldUpload
