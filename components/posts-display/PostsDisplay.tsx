'use client'

import { Post } from '@/libs/types/list-types'
import axios from 'axios'
import { useIntersection } from '@mantine/hooks'
import React, { useRef, useMemo, useEffect } from 'react'
import PostPreview from '../post-preview/PostPreview'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { filterPosts } from '@/utils/searchFilter'
import Link from 'next/link'
import './postsDisplay.scss'
import Loader from '../Loader/Loader'

function PostsDisplay({ initialPosts }: { initialPosts: Post[] }) {

  let lastPostRef = useRef<HTMLElement | null>(null);
  const searchParams = useSearchParams()
  const search = searchParams.get('q') as string

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0.3,
  })

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['infinite-scroll'],
    async ({ pageParam = 1 }) => {
      const res = await axios.post('/api/getPosts', pageParam)
      return res.data.body
    },
    {
      getNextPageParam: (_, pages) => {
        if (pages.length) {
          if (pages[pages.length - 1] !== pages[pages.length - 2]) {
            return pages.length + 1
          } else {
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


  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage()
    }

  }, [entry, fetchNextPage])

  const dataPosts = data?.pages.flatMap(post => post) ?? initialPosts
  const posts: Post[] = useMemo(() => (dataPosts), [dataPosts])
  const filteredPosts: Post[] = search ?
    filterPosts(posts, search) :
    []

  return posts.at(0) && search ?
    (
      <>
        <div className='all-posts'>
          <div className='all-posts__title'>
            <h1>
              Search Results
            </h1>
          </div>
          {
            filteredPosts?.map((post, index) => {
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
        {isFetchingNextPage ?
          <div>
            <Loader />
          </div>
          :
          null
        }
      </>
    )
    :
    (
      <>
        <div className='all-posts'>
          <div className='all-posts__title'>
            <h1>
              All Posts
            </h1>
          </div>
          <div className='all-posts__posts'>
            {
              posts?.map((post, index) => {
                if (index === posts.length - 1) {
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
        {isFetchingNextPage ?
          <div>
            <Loader />
          </div>
          :
          null
        }
      </>
    )
}

export default PostsDisplay