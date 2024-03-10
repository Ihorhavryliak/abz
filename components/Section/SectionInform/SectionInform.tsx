import React from 'react'
import ButtonGeneral from '../../Button/ButtonGeneral'
import photo from '../../../public/assets/images/main.png'
import Image from 'next/image'
import sectionIdConst from '@/constants/sectionIdConst'
import Link from 'next/link'
const SING_UP = sectionIdConst.SING_UP

const SectionInform = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Image
        className="w-full"
        alt="photo"
        width={1170}
        height={650}
        src={photo}
        loading="lazy"
        style={{
          objectFit: 'contain',
        }}
      />
      <div className="absolute top-0  w-full text-center flex justify-center mt-[89px]">
        <div className="max-w-[380px] w-full font-nunito text-white">
          <h1 className="text-[40px] leading-[100%]">Test assignment for front-end developer</h1>
          <p className="text-base leading-[162%] mt-[21px]">
            {`What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
            understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
            should also be excited to learn, as the world of Front-End Development keeps evolving.`}
          </p>
          <div className="mt-9">
            <Link href={`#${SING_UP}`} title="Sign up">
              <ButtonGeneral text="Sign up" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionInform
