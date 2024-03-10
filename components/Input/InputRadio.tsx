import classNames from '@/utils/classNames'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputRadioType = {
  checked?: boolean
  onClick: () => void
  value: string
  register: UseFormRegisterReturn
  positionId?: number
}

const InputRadio = ({ checked, onClick, value, register, positionId }: InputRadioType) => {
  return (
    <div className="flex items-center gap-3 h-5 max-360:h-[26px]">
      <label>
        <div className="group cursor-pointer">
          <div
            onClick={onClick}
            className={classNames(
              checked ? 'border-custom-blue-100' : 'border-custom-gray-200',
              'w-5 h-5 rounded-full border  relative group-hover:border-custom-blue-100 transition-all'
            )}
          >
            <span
              className={classNames(
                checked && 'bg-custom-blue-100',
                'w-2.5 h-2.5 rounded-full absolute left-1 top-1 group-hover:bg-custom-blue-100 transition-all'
              )}
            >
            </span>
          </div>
          <input className="hidden" type="radio" value={positionId} {...register} />
        </div>
      </label>

      <div className="font-nunito text-base leading-162 text-custom-black-100">{value}</div>
    </div>
  )
}

export default InputRadio
