import InputRadio from '@/components/Input/InputRadio'
import { fetchGetUserPosition, selectPosition, selectPositionSelected, usersActions } from '@/redux/slice/UsersSlice'
import { AppDispatch } from '@/redux/store'
import React, { useEffect } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

type SelectYourPositionRadioType = {
  register: UseFormRegisterReturn
  error?: string
}

const SelectYourPositionRadio = ({ register, error }: SelectYourPositionRadioType) => {
  const dispatch: AppDispatch = useDispatch()
  const positions = useSelector(selectPosition)
  const selectedPosition = useSelector(selectPositionSelected)

  useEffect(() => {
    dispatch(fetchGetUserPosition())
  }, [dispatch])

  const handleChosePosition = (positionId?: number) => {
    dispatch(usersActions.setPosition(positionId))
  }

  return (
    <div>
      <div className="flex gap-1">
        <h5 className="font-nunito text-base leading-162 text-custom-black-100 h-[25px]">Select your position</h5>
        {error && <span className="text-custom-red-100 text-xs leading-[117%] mt-1">({error})</span>}
      </div>
      <div className="flex flex-col mt-[11px] gap-[7px]">
        {positions.map(({ id, name }) => (
          <InputRadio
            key={id}
            positionId={id}
            value={name || ''}
            onClick={() => handleChosePosition(id)}
            checked={id === selectedPosition || false}
            register={register}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectYourPositionRadio
