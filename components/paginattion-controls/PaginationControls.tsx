'use client'


import React from 'react'
import './paginationControls.styles.scss'
import { useRouter, useSearchParams } from 'next/navigation'

function PaginationControls() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || '1'
  return (
    <div className='pagination_buttons'>
        <button 
        onClick={()=>router.push(`/posts?page=${Number(page)-1}`)} 
        className='__button'>{`<`}</button>
        <div>{page}</div>
        <button 
        onClick={()=>router.push(`/posts?page=${Number(page)+1}`)}
        className='__button'>{`>`}</button>
    </div>
  )
}

export default PaginationControls