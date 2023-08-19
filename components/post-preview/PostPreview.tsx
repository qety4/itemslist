import React from 'react'
import { Post } from '@/types/types'
function PostPreview({post}:{post:Post}) {
  return (
    <div>
      <h2>{post.mainCategory}</h2>
      <h3>{post.category}</h3>
      <p>{post.title}</p>
      <p>
          {post.description}
      </p>
      <p>
        Contact info {post.email}
      </p>
    </div>
  )
}

export default PostPreview