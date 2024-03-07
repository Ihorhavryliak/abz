import React from 'react'
import CardGeneral from '../../Cards/CardGeneral'
import { useSelector } from 'react-redux'
import { selectUsers } from '@/redux/slice/UsersSlice'
import { UserType } from '@/api/userApi'
import ButtonGeneral from '@/components/Button/ButtonGeneral'

const SectionUser = () => {
  const users = useSelector(selectUsers)

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
      <div className='flex justify-center mt-[50px]'>
        <ButtonGeneral text="Show more" />
      </div>
    </section>
  )
}

export default SectionUser
