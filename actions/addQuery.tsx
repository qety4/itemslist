'use client'
import React from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';



export async function submitSearch(formData:FormData,router:AppRouterInstance) {
    const searchInputValue = formData.get('searchInput')
    const searchQuery:string = `${searchInputValue}`.replace(/\s+/g, "")

    if(searchQuery !== '' && searchQuery!== null){
        addQuery(searchQuery,router)
    }
    else{
        return
    }
}

export async function addQuery(searchQuery:string, router:AppRouterInstance) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('q', `${searchQuery}`)
    router.push(`/posts?${searchParams.toString()}`)
}