import InputRadio from '@/components/Input/InputRadio'
import { fetchGetUserPosition, selectPosition, selectPositionSelected, usersActions } from '@/redux/slice/UsersSlice'
import { AppDispatch } from '@/redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SelectYourPosition = () => {
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
      <div className="flex flex-col gap-2.5 mt-[11px]">
        {positions.map(({ id, name }) => (
          <InputRadio
            key={id}
            value={name || ''}
            onClick={() => handleChosePosition(id)}
            checked={(id && !!selectedPosition[id]) || false}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectYourPosition
