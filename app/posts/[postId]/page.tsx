'use server'
import axios from 'axios'
import React from 'react'
import './post.scss'
import { notFound } from 'next/navigation'

async function Post({ params }: { params: { postId: string } }) {
  const id = params.postId
  const res = await axios.post('https://itemslist.vercel.app/api/getPost', id)
  const post = res.data.body

  return post ? (
    <div className='post-container'>
      <div className='post'>

        <div className='post__header'>
          <div className='post__categories'>
            <h2 className='post__mainCategory'>{post.mainCategory}</h2>
            <h3 className='post__category'>{post.category}</h3>
          </div>
          <p className='post__title'>{post.title}</p>
        </div>

        <p className='post_description'>
          {post.description}
        </p>

        <p className='post__contactInfo'>
          Contact info <b>{post.email}</b>
        </p>

      </div>
    </div>

  ) : (
    <div className='error-message'>
      <p>
        error 404: {`'not found :('`}
      </p>
    </div>
  )
}

export default Post