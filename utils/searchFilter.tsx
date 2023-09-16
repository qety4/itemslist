import { Post } from "@/libs/types/list-types";

export function filterPosts(posts:Post[],searchValue:string):Post[]{
    const searchValueParam =searchValue.replace(/\s+/g, "").toLowerCase()
    const searchedPosts = posts.filter((item)=>{
        if(
            item.title.toLowerCase().replace(/\s+/g, "").includes(searchValueParam.slice(0, searchValue.length - 1) ) || 
            item.description.toLowerCase().replace(/\s+/g, "").includes(searchValueParam) || 
            item.category.toLowerCase().replace(/\s+/g, "").includes(searchValueParam)||
            item.mainCategory.toLowerCase().replace(/\s+/g, "").includes(searchValueParam) ||
            item.email.toLowerCase().replace(/\s+/g, "").includes(searchValueParam)
        ){
            return item
        }
        else{
                return 
            }
        }
    )
    return searchedPosts
}