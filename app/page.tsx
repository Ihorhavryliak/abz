'use client'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import SectionForm from './components/Section/SectionForm/SectionForm'
import SectionInform from './components/Section/SectionInform/SectionInform'
import SectionUser from './components/Section/SectionUser/SectionUser'
import { fetchGetToken, fetchGetUsers } from '@/redux/slice/UsersSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

export default function Home() {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGetToken())
    dispatch(fetchGetUsers())
  }, [dispatch])

  return (
    <main className="max-w-mx m-auto w-full px-4 mb-[100px]">
      <Header />
      <SectionInform />
      <SectionUser />
      <SectionForm />
    </main>
  )
}
