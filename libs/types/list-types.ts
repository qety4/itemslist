import React from "react"

export type Post = {
    id?:string,
    title: string,
    description: string,
    mainCategory: 'items' | 'services',
    category: 'education' | 'automotive'| 'labor' | 'event' | 'computers/etc' | 'transport' | 'clothes' | 'other',
    email: string,
}
export type SearchProps={
    q:string,
}
export type categorySelectProps = {
    mainCategory:string,
    categories: string[],
    handleChange: (e:  React.ChangeEvent<HTMLSelectElement>)=> void
}
