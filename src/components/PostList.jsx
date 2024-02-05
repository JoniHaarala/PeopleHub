import { Post } from '../components'

const PostList = () => {
    /*
        aca toda la logica para hacer el fetch de los post
    */
    return (
        <div className='flex flex-col gap-6'>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostList;