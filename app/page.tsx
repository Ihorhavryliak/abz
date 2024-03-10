'use client'
import Header from '@/components/Header/Header'
import SectionInform from '@/components/Section/SectionInform/SectionInform'
import SectionUser from '@/components/Section/SectionUser/SectionUser'
import SectionForm from '@/components/Section/SectionForm/SectionForm'
import Preloader from '@/components/Preloader/Preloader'
import { useSelector } from 'react-redux'
import { selectIsLoading } from '@/redux/slice/UsersSlice'

const Home = () => {
  const isLoading = useSelector(selectIsLoading)
  return (
    <main className="max-w-mx m-auto w-full px-4 mb-[100px]">
      <Header />
      <SectionInform />
      <SectionUser />
      <div className="mt-[140px]">
        <SectionForm />
      </div>
      {isLoading && <Preloader />}
    </main>
  )
}
export default Home
