import { useState } from 'react'
import { Avatar } from '@mui/material';
//import ReplayIcon from '@mui/icons-material/Replay';
import avatar from '../assets/avatar.jpg'
import { MAX_TWEET_LENGTH } from '../dummy/constants';

export const Tweets = () => {
  const [totalChar, setTotalChar] = useState(0)
  return (
    <section className="bg-white rounded-lg p-3 mb-6 text-sm">
      <h2 className="pb-2 border-b-2 border-b-slate-200 font-medium">Tweet something</h2>
      <div className='mt-3 flex gap-3'>
        <Avatar alt="Avatar Photo" src={avatar} />
        <textarea
          className='w-full p-2 outline-none'
          placeholder="What's happening?"
          onChange={e => setTotalChar(e.target.value.length)}
          name=""
          id=""
          rows={3}
          maxLength={MAX_TWEET_LENGTH}
        />
      </div>
      <p className='mt-3 text-xs flex text-gray-400 justify-end'>{MAX_TWEET_LENGTH - totalChar}/{MAX_TWEET_LENGTH}</p>
      <div className='mt-4 mb-1 flex justify-between'>
        <div className='flex gap-3 items-center text-gray-500'>
          <h3>Who can reply?</h3>
          <select className='text-blue-500 outline-none'>
            <option className='text-black' value="Everyone">Everyone</option>
            <option className='text-black' value="People you follow">People you follow</option>
          </select>
        </div>
        <button
          type='button'
          className='py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:transition-all'
        >
          Tweet
        </button>
      </div>
    </section>
  )
}

export default Tweets