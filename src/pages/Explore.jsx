import { PostList } from '../components'

const Explore = () => {
  return (
    <section className='sm:px-16 px-6 mt-6 mx-auto w-full max-w-6xl flex flex-col md:flex-row gap-5'>
      <div className="h-fit py-3 flex flex-col items-start bg-white text-sm rounded-md shadow-sm sticky md:top-6 md:w-80">
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Top</button>
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Latest</button>
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">Media</button>
        <button className="w-full py-2 px-4 text-start hover:transition-all hover:border-l-4 focus:border-l-4 focus:border-blue-400 focus:text-blue-500">People</button>
      </div>
      <PostList />
    </section>
  )
}

export default Explore;