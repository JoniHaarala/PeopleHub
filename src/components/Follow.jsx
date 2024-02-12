import FollowCard from "./FollowCard"

const Follow = () => {
  return (
    <section className='p-3 bg-white rounded-lg hidden md:block sticky top-[450px]'>
      <p className="text-sm font-semibold">Who to follow</p>
      <FollowCard />
      <FollowCard />
      <FollowCard />
      <FollowCard />
    </section>
  )
}

export default Follow