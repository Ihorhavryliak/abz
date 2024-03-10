import { UserType } from '@/api/userApi'
import Image from 'next/image'
type CardGeneralType = {
  user: UserType
}
const CardGeneral = ({ user }: CardGeneralType) => {
  return (
    <div className="p-5 font-nunito max-w-[calc(33.333%-19.98px)] max-1024:max-w-[calc(33.333%-18.32px)px)] max-768:max-w-[calc(50%-8px)] w-full h-[254px] bg-white rounded-[10px] max-360:max-w-full">
      {user?.photo && (
        <div className="flex justify-center">
          <Image width={70} height={70} alt="image" className='rounded-full' src={user?.photo} />
        </div>
      )}
      <div className="mt-5 text-base leading-162 text-center text-custom-black-100 h-[26px]">
        <h4 className="truncate leading-162">{user?.name}</h4>
        <p className="mt-5 truncate h-[26px] leading-162">{user?.position}</p>
        <p className="truncate h-[26px] leading-162">{user?.email}</p>
        <p className="truncate h-[26px] leading-162">{user?.phone}</p>
      </div>
    </div>
  )
}

export default CardGeneral
