import classNames from '@/utils/classNames'
import { ChangeEvent, useEffect, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { DataInputType, ErrorUserFormType, inputFieldType } from '../Section/SectionForm/hooks/useFormData'
import useChangePositionLabel from './useChangePositionLabel'

type InputGeneralType = {
  item: DataInputType | { [key: string]: string }
  errors?: ErrorUserFormType
  label?: string
  type?: string
  phone?: string
  register: UseFormRegister<any>
  validation?:
    | {
        required?: string
        min?: undefined
        pattern?: undefined
      }
    | {
        required?: string
        min: number
        pattern?: undefined
      }
  value: string
}
type UserInformationNameType = keyof inputFieldType
type UserInformationNameErrorType = keyof ErrorUserFormType

const InputGeneral = ({ errors, label, type = 'text', phone, register, validation, item, value }: InputGeneralType) => {
  const { handleFocus, isFocus } = useChangePositionLabel()
  const isError = errors && errors[item?.name as UserInformationNameErrorType]

  return (
    <div>
      <div className="relative font-nunito input-component mb-5 empty">
        <input
          onFocus={handleFocus}
          type={type}
          id="floating_outlined"
          className={classNames(
            isError ? 'border-custom-red-100 border-2' : 'border-custom-gray-200 border',
            value ? 'text-custom-black-100' : 'text-custom-gray-300',
            'w-full py-3.5 ps-4 rounded focus:outline-none peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          )}
          {...register(item.name as UserInformationNameType, validation)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
            }
          }}
        />
        <label
          htmlFor="floating_outlined"
          className={classNames(
            isError ? 'text-custom-red-100' : 'text-custom-gray-300',
            isFocus || value ? 'text-xs -top-2 transform' : 'text-base top-4 transform',
            'absolute left-2 transition-all bg-white px-1'
          )}
        >
          {label && label}
        </label>
      </div>
      {phone && <div className="text-custom-gray-300 text-xs leading-[117%] ms-4">{phone}</div>}

      {isError && (
        <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1">
          {errors[item?.name as UserInformationNameErrorType]?.message}
        </div>
      )}
    </div>
  )
}

export default InputGeneral
