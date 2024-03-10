import React, { useEffect } from 'react'
import CardGeneral from '../../Cards/CardGeneral'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetUsers, selectCountRecord, selectLimit, selectPage, selectUsers, usersActions } from '@/redux/slice/UsersSlice'
import ButtonGeneral from '@/components/Button/ButtonGeneral'
import { AppDispatch } from '@/redux/store'
import sectionIdConst from '@/constants/sectionIdConst'
const USERS = sectionIdConst.USERS

const SectionUser = () => {
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector(selectUsers)
  const countRecord = useSelector(selectCountRecord)
  const page = useSelector(selectPage)
  const limit = useSelector(selectLimit)
  const sliceCount = page * limit
  const isButton = countRecord > sliceCount

  useEffect(() => {
    dispatch(fetchGetUsers())
  }, [dispatch])

  return (
    <section id={USERS}>
      <h2 className="font-nunito text-custom-black-100 text-[40px] leading-[100%] text-center">
        Working with GET request
      </h2>
      <div className="mt-[50px] w-full flex flex-wrap gap-4">
        {users.slice(0, sliceCount).map((user) => (
          <CardGeneral user={user} key={user.id} />
        ))}
      </div>
      <div className="flex justify-center mt-[50px]">
        {isButton && <ButtonGeneral text="Show more" onClick={() => dispatch(usersActions.setPage(page))} />}
      </div>
    </section>
  )
}

export default SectionUser
