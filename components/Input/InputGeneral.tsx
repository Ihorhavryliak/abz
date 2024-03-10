import classNames from '@/utils/classNames'
import { UseFormRegisterReturn } from 'react-hook-form'
import { DataInputType } from '../Section/SectionForm/hooks/useFormData'

type InputGeneralType = {
  item: DataInputType
  error?: string
  label?: string
  type?: string
  phone?: string
  register: UseFormRegisterReturn
  value: string
}

const InputGeneral = ({ error, label, type = 'text', phone, register, item, value }: InputGeneralType) => {
  return (
    <div>
      <div className="relative font-nunito input-component mb-5 empty group">
        <input
          type={type}
          id={`floating_outlined ${item.id}`}
          className={classNames(
            error ? 'border-custom-red-100 border-2' : 'border-custom-gray-200 border ',
            value ? 'text-custom-black-100' : 'text-custom-gray-300',
            'w-full py-3.5 ps-4 rounded focus:outline-none peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          )}
          {...register}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
            }
          }}
        />
        <label
          htmlFor={`floating_outlined ${item.id}`}
          className={classNames(
            error ? 'text-custom-red-100' : 'text-custom-gray-300',
            !value ? 'top-4 text-base' : '-top-2 text-sm',
            'absolute left-2 transition-all group-focus:bg-gray-100 bg-white px-1 group-focus-within:-top-2 group-focus-within:text-sm focus-within:-top-2'
          )}
        >
          {label && label}
        </label>
      </div>
      {phone && <div className="text-custom-gray-300 text-xs leading-[117%] ms-4">{phone}</div>}
      {error && <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1">{error}</div>}
    </div>
  )
}

export default InputGeneral
