import { trends } from '../dummy/constants'

// eslint-disable-next-line react/prop-types
const Trend = ({ hashtag, replies }) => {
  return <div className='flex flex-col gap-2'>
    <p className='font-semibold'>{hashtag}</p>
    <p className='text-sm text-gray-500'>{replies}k Tweets</p>
  </div>
}

const Trends = () => {
  return (
    <section className="pt-3 pb-8 px-5 bg-white text-sm w-72 h-fit rounded-lg sticky top-4 hidden md:block">
      <h3 className='text-gray-600 mb-6 py-2 border-b-2 border-b-gray-300'>Trends for you</h3>

      <div className='flex flex-col gap-4'>
        {
          trends.slice(0, 5).map((trend) => (
            <Trend key={trend.hashtag} hashtag={trend.hashtag} replies={trend.replies} />
          ))
        }
      </div>
    </section>
  )
}

export default Trends;