import FollowCard from "./FollowCard"

const Follow = () => {
  return (
    <section className='p-3 bg-white rounded-lg'>
      <p className="text-sm font-semibold">Who to follow</p>
      <FollowCard />
      <FollowCard />
      <FollowCard />
      <FollowCard />
    </section>
  )
}

export default Follow