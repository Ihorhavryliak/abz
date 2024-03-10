import Link from 'next/link'
import ButtonGeneral from '../Button/ButtonGeneral'
import IconLogo from '../Icon/IconLogo'
import sectionIdConst from '@/constants/sectionIdConst'
const USERS = sectionIdConst.USERS
const SING_UP = sectionIdConst.SING_UP

const Header = () => {
  return (
    <div className="py-4 flex justify-between w-full">
      <IconLogo />
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
