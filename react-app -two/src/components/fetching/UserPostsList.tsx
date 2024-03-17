import { useState } from 'react'
import useUserPosts from '../../hooks/fetching/useUserPosts'

const UserPostList = () => {
 const [userId, setUserId] = useState<number>()
 const {data : posts, error, isLoading} = useUserPosts(userId)

if (isLoading) return <p>Loading ....</p>

 if(error) return <p>{error.message}</p>

  return (
    <>
      <select 
        name="" id="" className='form-select mb-3' 
        onChange={(event)=> setUserId(parseInt(event.target.value)) }>
        <option value=""></option>
        {/* hard coded */}
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul className='list-group'>
        {posts?.map(post => <li key={post.id} className='list-group-item'>
          {post.title}
        </li>)}
      </ul>
    </>
  )
}

export default UserPostList