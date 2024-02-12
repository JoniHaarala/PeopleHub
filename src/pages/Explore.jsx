import { PostList } from '../components'
import SearchIcon from '@mui/icons-material/Search';

const Explore = () => {
  return (
    <section className='sm:px-16 px-6 mt-6 mx-auto w-full max-w-6xl flex flex-col md:flex-row gap-5'>
      <div className="h-fit py-3 flex flex-col items-start bg-white text-sm rounded-md shadow-sm sticky md:top-6 md:w-80">
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Top</button>
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Latest</button>
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Media</button>
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">People</button>
      </div>
      <div>
        <div className='p-3 mb-6 rounded-lg shadow-sm flex h-fit items-center bg-white text-sm'>
          <SearchIcon color='disabled' />
          <input
            type="text"
            placeholder='Search'
            className='w-full px-5 outline-none'
          />
          <button className='px-5 py-2 rounded-md bg-blue-500 text-white hover:transition hover:bg-blue-400'>Search</button>
        </div>

        <PostList />
      </div>

    </section>
  )
}

export default Explore;