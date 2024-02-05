import { PostList, Trends } from '../components'

const MainMenu = () => {
  return (
    <main className="flex gap-6">
      <PostList />
      <Trends />
    </main>
  )
}

export default MainMenu;