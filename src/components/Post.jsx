import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CachedIcon from '@mui/icons-material/Cached';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar } from '@mui/material';
/* dummy imports */
import avatar from '../assets/avatar.jpg'
import ImgPost from '../assets/random1.jpg'
/*---------------*/
export const Post = () => {
  return (
    <section className='bg-white p-5 rounded-lg flex flex-col gap-5 max-w-2xl text-sm'>
      <div className='flex gap-5 items-center'>
        <Avatar alt="Avatar Photo" src={avatar} />
        <div className='flex flex-col text-base'>
          <p className='font-medium'>Joni Haarala</p>
          <p className='text-xs text-gray-500'>1 de Febrero del 2024</p>
        </div>
      </div>

      <p>Traveling - it leaves you speechless, then turns you into a storyteller.</p>
      <img src={ImgPost} alt="post image" className='rounded-lg'/>
      <div className='flex gap-5 justify-end text-gray-400'>
        <p>435 Commnets</p>
        <p>59k Retweets</p>
        <p>129k Likes</p>
      </div>
      <div className='flex gap-5 justify-around'>
        <button><ChatBubbleOutlineIcon /><span> Comment</span></button>
        <button><CachedIcon /><span> Retweet</span></button>
        <button><FavoriteBorderIcon /><span> Like</span></button>
        <button><BookmarkBorderIcon /><span> Save</span></button>
      </div>
      <div></div>
    </section>
  )
}

export default Post;