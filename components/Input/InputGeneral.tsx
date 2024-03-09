import classNames from '@/utils/classNames'
import { UseFormRegister } from 'react-hook-form'
import { ErrorUserFormType, inputFieldType } from '../Section/SectionForm/hooks/useFormData'

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
  phone?: string
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
type InputGeneralFieldType = keyof inputFieldType
type InputGeneralErrorType = keyof ErrorUserFormType

const InputGeneral = ({ errors, label, type = 'text', phone, register, validation, item, value }: InputGeneralType) => {
  const isError = errors && errors[item?.name as InputGeneralErrorType]

  return (
    <div>
      <div className="relative font-nunito input-component mb-5 empty group">
        <input
          type={type}
          id={`floating_outlined ${item.id}`}
          className={classNames(
            isError ? 'border-custom-red-100 border-2' : 'border-custom-gray-200 border ',
            value ? 'text-custom-black-100' : 'text-custom-gray-300',
            'w-full py-3.5 ps-4 rounded focus:outline-none peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          )}
          {...register(item.name as InputGeneralFieldType, {
            ...validation,
          })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
            }
          }}
        />
        <label
          htmlFor={`floating_outlined ${item.id}`}
          className={classNames(
            isError ? 'text-custom-red-100' : 'text-custom-gray-300',
            !value ? 'top-4 text-base' : '-top-2 text-sm',
            'absolute left-2 transition-all group-focus:bg-gray-100 bg-white px-1 group-focus-within:-top-2 group-focus-within:text-sm focus-within:-top-2'
          )}
        >
          {label && label}
        </label>
      </div>
      {phone && <div className="text-custom-gray-300 text-xs leading-[117%] ms-4">{phone}</div>}
      {isError && (
        <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1">
          {errors[item?.name as InputGeneralErrorType]?.message}
        </div>
      )}
    </div>
  )
}

export default InputGeneral
