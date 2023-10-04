import React from 'react'
import { Post } from '@/libs/types/list-types'
import { useRouter } from 'next/navigation';
import './postPreview.scss'

const PostPreview = ({ post }: { post: Post }) =>{

  const router = useRouter()
  const toPost = () => {
    router.push(`/posts/${post.id}`)
  }

  return (
    <div className='postPreview' onClick={toPost}>
      <div className='postPreview-header'>
        <div className='postPreview__categories'>
          <h2 className='postPreview__mainCategory'>{post.mainCategory}</h2>
          <h3 className='postPreview__category'>{post.category}</h3>
        </div>
        <p className='postPreview__title'>{post.title}</p>
      </div>
      <p className='postPreview__description'>
        {post.description}
      </p>
      <p className='postPreview__contactInfo'>
        Contact info <b>{post.email}</b>
      </p>
    </div>
  )
}


export default PostPreview