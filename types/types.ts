export type Post = {
    id?:string,
    mainCategory:string,
    title: string,
    category: string,
    description: string,
    email: string,
    createdAt?: Date
}
export type SearchProps={
    q:string,
    page:string,
}