import { PostList } from '../components'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import avatar from '../assets/avatar.jpg'
import banner from '../assets/random2.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col w-screen'>
      <img
        className='w-full object-cover h-72'
        src={banner}
        alt="profile banner"
      />
      <main className='sm:px-16 px-6 mx-auto w-full max-w-6xl flex flex-col items-center gap-5'>

        <section id='information' className="w-full p-4 bg-white flex items-center justify-between rounded-b-lg shadow-sm">
          <div className="flex">
            <img
              className='rounded-md shadow-lg absolute top-72'
              src={avatar}
              width={160}
              height={160}
              alt="profile banner"
            />
            <p className='w-44'></p>
            <div className='w-[420px] px-4'>
              <div className='py-2 flex justify-between items-center'>
                <p className='font-semibold text-lg'>Joni Haarala</p>
                <p className="text-xs"><span className='font-semibold'>2.506</span> Following</p>
                <p className="text-xs"><span className='font-semibold'>13.5K</span> Followers</p>
              </div>
              <p className='w-[420px] h-fit mt-2 text-gray-600'>Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰 Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰 Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>
            </div>
          </div>
          <button className='px-3 py-1 h-fit  justify-start text-white bg-blue-500 rounded-md font-medium text-xs hover:transition-all hover:bg-blue-600'><PersonAddAlt1Icon fontSize='small' /> Follow</button>
        </section>

        <section className='w-full flex justify-between gap-6'>
          <div className="w-80 h-fit py-3 flex flex-col items-start bg-white text-sm rounded-md shadow-sm">
            <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Tweets</button>
            <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Tweets and Replies</button>
            <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Media</button>
            <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Likes</button>
          </div>
          <PostList />
        </section>
      </main>
    </div>
  )
}

export default Profile;