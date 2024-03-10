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
  id: number
}

const InputGeneral = ({ error, label, type = 'text', phone, register, value, id }: InputGeneralType) => {
  return (
    <div className='relative'>
      <div className="relative font-nunito input-component  empty group">
        <input
          type={type}
          id={`floating_outlined ${id}`}
          className={classNames(
            error ? 'border-custom-red-100 border-2' : 'border-custom-gray-200 border ',
            value ? 'text-custom-black-100' : 'text-custom-gray-300',
            'w-full h-[54px] py-3.5 ps-4 rounded focus:outline-none peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          )}
          {...register}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
            }
          }}
        />
        <label
          htmlFor={`floating_outlined ${id}`}
          className={classNames(
            error ? 'text-custom-red-100' : 'text-custom-gray-300',
            !value ? 'top-[15px] text-base' : '-top-2 text-sm',
            'absolute left-3 transition-all group-focus:bg-gray-100 bg-white px-1 group-focus-within:-top-2 group-focus-within:text-sm focus-within:-top-2'
          )}
        >
          {label && label}
        </label>
      </div>
      {phone && <div className="text-custom-gray-300 text-xs leading-[117%] ms-4 max-360:mt-1 h-[16px] max-1024:mt-1 max-1170:mt-1 max-768:mt-0">{phone}</div>}
      {error && <div className="text-custom-red-100 text-xs leading-[117%] ms-4 mt-1 -bottom-[18px] absolute">{error}</div>}
    </div>
  )
}

export default InputGeneral
