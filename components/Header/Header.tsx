import Link from 'next/link'
import ButtonGeneral from '../Button/ButtonGeneral'
import IconLogo from '../Icon/IconLogo'
import sectionIdConst from '@/constants/sectionIdConst'
const USERS = sectionIdConst.USERS
const SING_UP = sectionIdConst.SING_UP

const Header = () => {
  return (
    <div className="max-360:px-4 py-[13px] flex flex-wrap justify-between w-full max-1024:px-[60px] max-768:px-8 max-360:gap-3.5 items-center">
      <div className="max-360:w-[104px] h-[26px]">
        <IconLogo />
      </div>
      <div className="flex gap-2.5">
        <Link href={`#${USERS}`} title="Users">
          <ButtonGeneral text="Users" />
        </Link>
        <Link href={`#${SING_UP}`} title="Sign up">
          <ButtonGeneral text="Sign up" />
        </Link>
      </div>
    </div>
  )
}

export default Header
