import { PostList, Trends, Tweets, Follow } from '../components'

const MainMenu = () => {
  return (
    <div className='sm:px-16 px-6 max-w-7xl mx-auto'>
      <main className="flex md:gap-6 mt-6">
        <div>
          <Tweets />
          <PostList />
        </div>
        
        {/* consultar si queda mejor con h-full o max-h-[2000px] */}
        <div className='hidden max-h-[2000px] sticky top-4 md:flex flex-col md:gap-6'>
          <Trends />
          <Follow />
        </div>
      </main>
    </div>
  )
}

export default MainMenu;