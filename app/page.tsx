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
    <main className="max-w-mx m-auto w-full px-0 mb-100 max-1170:px-0">
      <Header />
      <SectionInform />
      <div className="mt-140 max-1024:px-60 max-768:px-8 max-360:px-4">
        <SectionUser />
      </div>
      <div className="mt-140 max-1024:px-60 max-768:px-8 max-360:px-4">
        <SectionForm />
      </div>
      {isLoading && <Preloader />}
    </main>
  )
}
export default Home
