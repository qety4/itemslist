import React from 'react'
import './rootCategories.scss'
import Link from 'next/link'
import SearchAll from '@/components/search-all/SearchAll'

function RootCategories() {

  const services = ['education','automotive','labor','event']
  const goods = ['computers/etc.','transport','clothes','other']
  return (
    <main className='categories-main'>
        <div className='search'>
          <h3>itemslist</h3>
          <p>profile</p>
          <Link href="newpost"  ><p className="create-post">create post</p></Link>
          <SearchAll/>
        </div>
        <div className='services'>
          <h3>SERVICES</h3>
          <div className='services__list'>
            {
              services.map((item)=>
                <p>{item}</p>
              )
            }
          </div>
        </div>
        <div className='products'>
          <h3>GOODS</h3>
          <div className='products__list'>
          {
              services.map((item)=>
                <p>{item}</p>
              )
          }
          </div>
        </div>
    </main>
  )
}

export default RootCategories
