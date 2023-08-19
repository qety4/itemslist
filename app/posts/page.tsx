'use server'
import React from 'react'
import { SearchProps } from '@/types/types'
import { getInitalPosts } from '@/utils/firebase/firebase'
import PostsDisplay from '@/components/posts-display/PostsDisplay'
import { filterPosts } from '@/utils/searchFilter'
import PaginationControls from '@/components/paginattion-controls/PaginationControls'

async function Posts({ searchParams }: { searchParams: SearchProps }) {
  console.log('search param',searchParams)
 
  const posts = await getInitalPosts()
  const searchValue: string | null = searchParams.q ?? null

  const searchedPosts = searchValue !== null ?
    filterPosts(posts, searchValue) :
    []

  return (
    <main>

      {
        searchedPosts.at(0) ?
          <>
            <h1>Searched Posts</h1>
            <PostsDisplay
              displayPosts={searchedPosts}
            />
          </>
          :
          <>
            {
              searchValue != '' && searchValue != null ?
                <p>no posts matched search</p>
                :
                ''
            }
            <h1>All Posts</h1>
            <PostsDisplay displayPosts={posts} />
          </>
      }
    </main>
  )
}
export default Posts