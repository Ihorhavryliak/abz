import classNames from '@/utils/classNames'
import React, { useState, ChangeEvent } from 'react'
import { ErrorUserFormType, inputFieldType } from '../Section/SectionForm/hooks/useFormData'
import { UseFormRegister } from 'react-hook-form'

type InputGeneralType = {
  item:
    | {
        id: string
        name: string
        type: string
        placeholder: string
        value: string
        error: string
      }
    | { [key: string]: string }
  errors?: ErrorUserFormType
  label?: string
  type?: string
  register: UseFormRegister<any>
  validation?:
    | {
        required: string
        min?: undefined
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
      }
    | {
        required: string
        min: number
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
      }
  value: string
}
type UserInformationNameType = keyof inputFieldType
type UserInformationNameErrorType = keyof ErrorUserFormType

const FieldUpload = ({ errors, label, type = 'text', register, validation, item, value }: InputGeneralType) => {
  const isError = errors && errors[item?.name as UserInformationNameErrorType]

  return (
    <div className="font-nunito max-w-[328px] w-full cursor-pointer">
      <label>
        <div className="flex h-[54px]">
          <div
            className={classNames(
              isError ? 'border-custom-red-100 border-2' : ' border border-black',
              'text-base leading-162 text-center px-[15px] py-3.5 rounded-s'
            )}
          >
            Upload
          </div>
          <div
            className={classNames(
              isError ? 'border-custom-red-100 border-2' : 'border-custom-gray-200 border',
              value ? 'text-custom-black-100' : 'text-custom-gray-300',
              'w-full  py-3.5 ps-4 border-s-0 rounded-e'
            )}
          >
            {value ? 'value?..' : 'Upload your photo'}
          </div>
        </div>
        <input
          className="hidden"
          type="file"
          accept=".jpg, .jpeg"
          {...register(item.name as UserInformationNameType, {
            ...validation,
          })}
        />
      </label>
      {isError && (
        <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1">
          {errors[item?.name as UserInformationNameErrorType]?.message}
        </div>
      )}
    </div>
  )
}

export default FieldUpload
