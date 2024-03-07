import { UserType } from '@/api/userApi'
import Image from 'next/image'
type CardGeneralType = {
  user: UserType
}
const CardGeneral = ({ user }: CardGeneralType) => {
  return (
    <div className="p-5 font-nunito max-w-[calc(33.333%-11px)] w-full h-[254px] bg-white rounded-[10px] ">
      {user?.photo && (
        <div className="flex justify-center">
          <Image width={70} height={70} alt="image" src={user?.photo} />
        </div>
      )}
      <div className="mt-5 text-base leading-162 text-center text-custom-black-100">
        <h4>{user?.name}</h4>
        <p className="mt-5">{user?.position}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  )
}

export default CardGeneral
