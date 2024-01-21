import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import ProfileMenu from './ProfileMenu'

export const Navbar = () => {
  return (
    <div className='py-5 px-10 flex items-center justify-between'>
      <Link to="/"><img src={logo} alt="logo" width={150} /></Link>
      <div className='w-80 flex justify-between gap-10 outline-none'>
        <Link className=' hover:text-blue-500 transit hover:transition-all' to="/explore">Explore</Link>
        <Link className=' hover:text-blue-500 transit hover:transition-all' to="/bookmarks">Bookmarks</Link>
        <Link className=' hover:text-blue-500 transit hover:transition-all' to="/profile">Profile</Link>
      </div>
      <ProfileMenu/>
    </div>
  )
}

export default Navbar;