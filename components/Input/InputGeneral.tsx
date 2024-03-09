import classNames from '@/utils/classNames'
import { ChangeEvent, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { DataInputType, ErrorUserFormType, inputFieldType } from '../Section/SectionForm/hooks/useFormData'

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

const InputGeneral = ({
  errors,
  label,
  type = 'text',
  phone,
  register,
  validation,
  item,
  value,
}: InputGeneralType) => {

  const [isFocus, setIsFocus] = useState(false)

  const handleBlur = () => {
    debugger
    setIsFocus((prev) => !prev)
  }
  const handleFocus = () => {
    setIsFocus(!isFocus)
  }

  const isError = errors && errors[item?.name as UserInformationNameErrorType]
  return (
    <div>
      <div className="relative font-nunito">
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
            isFocus || value ? 'text-xs' : 'text-base',
            'font-medium ms-2 absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 duration-300'
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
