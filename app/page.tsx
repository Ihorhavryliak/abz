'use client'
import Header from '@/components/Header/Header'
import SectionInform from '@/components/Section/SectionInform/SectionInform'
import SectionUser from '@/components/Section/SectionUser/SectionUser'
import SectionForm from '@/components/Section/SectionForm/SectionForm'

const Home = () => {

  return (
    <main className="max-w-mx m-auto w-full px-4 mb-[100px]">
      <Header />
      <SectionInform />
      <SectionUser />
      <div className="mt-[140px]">
        <SectionForm />
      </div>
    </main>
  )
}
export default Home
