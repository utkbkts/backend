import Posts from '@/shared/Post'
import Toppost from '@/shared/Toppost'
import React from 'react'
const PostsPage = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] max-w-screen-[1450px] overflow-y-hidden h-fit max-lg:space-y-7'>
      <Posts/>
      <Toppost/>
    </div>
  )
}

export default PostsPage