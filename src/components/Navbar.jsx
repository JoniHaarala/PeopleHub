import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import ProfileMenu from './ProfileMenu'

export const Navbar = () => {
  return (
    <div className='px-10 flex items-center justify-between bg-white h-fit'>
      <Link to="/"><img src={logo} alt="logo" width={150} /></Link>
      <div className='w-80 flex justify-between gap-10 outline-none text-sm'>
        <Link className='py-6 font-medium focus:text-blue-600 hover:text-blue-400 hover:transition-all' to="/explore">Explore</Link>
        <Link className='py-6 font-medium focus:text-blue-600 hover:text-blue-400 hover:transition-all' to="/bookmarks">Bookmarks</Link>
        <Link className='py-6 font-medium focus:text-blue-600 hover:text-blue-400 hover:transition-all' to="/profile">Profile</Link>
      </div>
      <ProfileMenu/>
    </div>
  )
}

export default Navbar;