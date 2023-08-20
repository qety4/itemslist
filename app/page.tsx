import React from 'react'
import './homePage.scss'
import Link from 'next/link'
import SearchAll from '@/components/search-all/SearchAll'

function HomePage() {

  const services = ['education', 'automotive', 'labor', 'event']
  const items = ['computers/etc', 'transport', 'clothes', 'other']
  return (
    <main className='home-page'>
      <div className='search'>
        <h3 className='products__title logo-title'>itemslist</h3>
        <div className='search__links'>
          <SearchAll />
          <div className='new-post'>
            <Link href="newpost" >create post</Link>
          </div>
          <div className='search__all-posts'>
            <Link href="posts">ALL POSTS</Link>
          </div>
        </div>
      </div>
      <div className='categories-main'>
        <div className='products'>
          <h3 className='products__title'>
            <Link href='posts?q=items'>
              ITEMS
            </Link>
          </h3>
          <div className='products__list'>
            {
              items.map((item, index) =>
                <Link className='to-category' href={`posts?q=${item}`} key={index}>
                  {item}
                </Link>
              )
            }
          </div>
        </div>
        <div className='products'>
          <h3 className='products__title'>
            <Link href='posts?q=services'>
              SERVICES
            </Link>
          </h3>
          <div className='products__list'>
            {
              services.map((item, index) =>
                <Link key={index} className='to-category' href={`posts?q=${item}`} >
                  {item}
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
