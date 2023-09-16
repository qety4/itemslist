'use server'
import React, { Suspense } from 'react'
import axios from 'axios'

import PostsDisplay from '@/components/posts-display/PostsDisplay'

async function Posts() {
  const res= await axios.post('https://itemslist.vercel.app/api/getPosts', '1')
  const  initialPosts = res.data.body
  return (
    <main className='all-posts'>
      <PostsDisplay initialPosts={initialPosts}/>
    </main>
  )
}
export default Posts