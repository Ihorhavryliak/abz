import React, { useEffect } from 'react'
import CardGeneral from '../../Cards/CardGeneral'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetCountPageUsers, fetchGetUsers, selectCountRecord, selectUsers } from '@/redux/slice/UsersSlice'
import { UserType } from '@/api/userApi'
import ButtonGeneral from '@/components/Button/ButtonGeneral'
import { AppDispatch } from '@/redux/store'

const SectionUser = () => {
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector(selectUsers)
  const countRecord = useSelector(selectCountRecord)
  const isButton = countRecord > users?.length

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchGetCountPageUsers())
      await dispatch(fetchGetUsers())
    }
    fetch()
  }, [dispatch])
  return (
    <section className="mt-[140px]">
      <h2 className="font-nunito text-custom-black-100 text-[40px] leading-[100%] text-center">
        Working with GET request
      </h2>
      <div className="mt-[50px] w-full flex flex-wrap gap-4">
        {users.map((user) => (
          <CardGeneral user={user} key={user.id} />
        ))}
      </div>
      <div className="flex justify-center mt-[50px]">
        {isButton && <ButtonGeneral text="Show more" onClick={() => dispatch(fetchGetUsers())} />}
      </div>
    </section>
  )
}

export default SectionUser
