'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'
import './nav.scss'
import SearchAll from '../search-all/SearchAll'
import Link from 'next/link'

function Nav() {
  const segment = useSelectedLayoutSegment()
  return (
    segment &&
    <div className='nav'>
      <Link href='/'>
        <h3 className='nav__logo'>itemslist</h3>
      </Link>
      <SearchAll />
    </div>

  )
}

export default Nav