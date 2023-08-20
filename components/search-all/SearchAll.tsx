'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import {submitSearch} from '@/actions/addQuery'

function SearchAll() {
    const router = useRouter()

    return (
        <>
            <form className="search__form" action={(formData)=>submitSearch(formData,router)} >
                <label className='search__form__label' htmlFor="search__form__input">Search Marketplace</label>
                <input id="search__form__input" name="searchInput" type="text" placeholder='search all' />
            </form>
        </>
    )
}

export default SearchAll