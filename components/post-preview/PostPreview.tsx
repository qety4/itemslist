import React from 'react'
import { Post } from '@/types/types'
import { useRouter } from 'next/navigation';
import './postPreview.scss'

function PostPreview({post}:{post:Post}) {
  const router = useRouter()
  const toPost= ()=>{
    router.push(`/posts/${post.id}`)
  }

  return (
    <div className='postPreview' onClick={toPost}>
      <h2 className='postPreview__mainCategory'>{post.mainCategory}</h2>
      <h3 className='postPreview__category'>{post.category}</h3>
      <p className='postPreview__title'>{post.title}</p>
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