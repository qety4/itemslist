'use client'

import { SearchProps, Post } from '@/libs/types/list-types'
import axios from 'axios'
import { useIntersection } from '@mantine/hooks'
import React, { useEffect, useRef, useState } from 'react'
import PostPreview from '../post-preview/PostPreview'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { filterPosts } from '@/utils/searchFilter'
import Link from 'next/link'
import './postsDisplay.scss'

function PostsDisplay({ initialPosts }: { initialPosts: Post[] }) {

  const lastPostRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams()
  const search = searchParams.get('q') as string

  console.log('search query', search)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0.1,
  })


  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['infinite-scroll'],
    async ({ pageParam = 1 }) => {
      const res = await axios.post('http://localhost:3000/api/getPosts', pageParam)
      return res.data.body
    },
    {
      getNextPageParam: (_, pages) => {
        if(pages.length){
          if(pages[pages.length-1] !== pages[pages.length-2]){
            return pages.length+1
          }else{
            return
          }
        }
        return pages.length + 1
        
      },
      initialData: {
        pages: [initialPosts],
        pageParams: [1]
      },

    }
  )
  if (entry?.isIntersecting) fetchNextPage()
  console.log('data fetched',data)

  const posts:Post[] = data?.pages.flatMap(post => post) ?? initialPosts

  const filteredPosts:Post[]= search ?
    filterPosts(posts, search)
    :
    posts

  return (
    <main>

      {search ?
        <div className='all-posts'>
          <div className='all-posts__title'>
            <h1>
              Search Results
            </h1>
          </div>
          {
            filteredPosts?.map((post,index) => {
              if (index == filteredPosts.length - 1) {
                return (
                  <div key={index} className="last-post" ref={ref}>
                    <PostPreview post={post} />
                  </div>
                )
              }
              return (
                <div key={index}>
                  <PostPreview post={post} />
                </div>
              )
            })
          }
          <div className='to-all-products'>
            <Link className='to-all-products__btn' href='/posts'>TO ALL PRODUCTS</Link>
          </div>
        </div>
        :
        <div className='all-posts'>
          <div className='all-posts__title'>
            <h1>
              All Posts
            </h1>
          </div>
          <div className='all-posts__posts'>
            {
              filteredPosts?.map((post, index) => {
                if (index === filteredPosts.length - 1) {
                  return (
                    <div key={index} className="last-post" ref={ref}>
                      <PostPreview post={post} />
                    </div>
                  )
                }
                return (
                  <div key={index}>
                    <PostPreview post={post} />
                  </div>
                )
              })
            }
          </div>
        </div>
      }

    </main>
  )
}

export default PostsDisplay