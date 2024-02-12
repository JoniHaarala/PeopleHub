import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Avatar, Tooltip } from '@mui/material';
import avatar from '../assets/avatar.jpg'

export const FollowCard = () => {
  return (
    <Tooltip
      title='Joni Haarala Haarala'
      placement="top-end"
      arrow
    > {/* agregar luego como variable el nombre del posible seguidor*/}
      <div className='flex px-1 py-4 mt-3 text-sm items-center justify-between border-t'>
        <div className='flex gap-3 items-center'>
          <Avatar src={avatar} />
          <div>
            <p className=' max-w-24 font-semibold'>Joni Haarala Haarala</p>
            <p className='text-xs'>15k followers</p>
          </div>
        </div>
        <button className='px-3 py-1 h-fit text-white bg-blue-500 rounded-md font-medium text-xs hover:transition-all hover:bg-blue-600'><PersonAddAlt1Icon fontSize='small' /> Follow</button>
      </div>
    </Tooltip>
  )
}

export default FollowCard;