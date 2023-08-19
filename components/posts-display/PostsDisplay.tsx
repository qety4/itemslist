'use client'

import { Post } from '@/types/types'
import React,{useRef} from 'react'
import PostPreview from '../post-preview/PostPreview'
import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

function PostsDisplay({displayPosts}:{displayPosts:Post[]}) {

  const lastPostRef = useRef<HTMLElement>(null)
  const {ref, entry} = useIntersection({
    root: lastPostRef.current,
    threshold:1
  })
  const {data,fetchNextPage,isFetchingNextPage} = useInfiniteQuery(
    ['infinite-query'],
    async ()=>{
      const queryUrl = `/api/posts`
      const query = lastPostRef
      // console.log(lastPostRef)
      const { data } = await axios.post(queryUrl,{body:lastPostRef})
      return data as Post[]

    },{
      getNextPageParam:(_, pages)=>{
        return pages.length+1
      },
      initialData:{pages:[displayPosts], pageParams:[1]}
    },
  )

  const posts = data?.pages.flatMap((page)=>page) ?? displayPosts

  return (
    <>
    {
        posts.map((post, index)=>
        <PostPreview key={index} post={post}/>
        )
    }
    </>
  )
}

export default PostsDisplay