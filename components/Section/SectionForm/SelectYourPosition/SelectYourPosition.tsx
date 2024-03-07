import InputRadio from '@/components/Input/InputRadio'
import React from 'react'

const professionData = [
  {
    id: 1,
    name: 'Frontend developer',
    onClick: (id: number) => {},
    checked: false,
  },
  {
    id: 2,
    name: 'Backend developer',
    onClick: (id: number) => {},
    checked: false,
  },
  {
    id: 3,
    name: 'Designer',
    onClick: (id: number) => {},
    checked: false,
  },
  {
    id: 4,
    name: 'QA',
    onClick: (id: number) => {},
    checked: false,
  },
]

const SelectYourPosition = () => {
  return (
    <div>
      <div className="flex flex-col gap-2.5 mt-[11px]">
        {professionData.map(({ checked, id, name, onClick }) => (
          <InputRadio value={name} onClick={() => onClick(id)} checked={checked} />
        ))}
      </div>
    </div>
  )
}

export default SelectYourPosition
