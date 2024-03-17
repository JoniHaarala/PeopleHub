import logo from '../assets/logo.png'
import ProfileMenu from './ProfileMenu'
import { AnimateLink } from "./AnimateLink"

export const Navbar = ({ user }) => {
  return (
    <div className='px-10 flex items-center justify-between bg-white h-fit'>
      <AnimateLink to="/"><img src={logo} alt="logo" width={150} /></AnimateLink>
      <div className='w-80 flex justify-between gap-10 outline-none text-sm'>
        <AnimateLink
          styles='py-6 font-medium focus:text-blue-600 hover:text-blue-400 hover:transition-all'
          to="/"
        >
          Home
        </AnimateLink>
        <AnimateLink
          styles='py-6 font-medium focus:text-blue-600 hover:text-blue-400 hover:transition-all'
          to="/explore"
        >
          Explore
        </AnimateLink>
        <AnimateLink
          styles='py-6 font-medium focus:text-blue-600 hover:text-blue-400 hover:transition-all'
          to="/bookmarks"
        >
          Bookmarks
        </AnimateLink>
      </div>

      {
        user
          ?
          <ProfileMenu />
          :
          <AnimateLink
            to='/login'
            styles='border-4 border-blue-500 text-blue-700 font-semibold px-5 py-2 rounded-lg text-sm hover:text-white hover:bg-blue-500 hover:transition-all duration-200 ease-in-out'
          >
            Log In
          </AnimateLink>
      }
    </div>
  )
}

export default Navbar;