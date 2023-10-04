'use server'

import prisma from "@/libs/prisma/client"


export async function POST(req: Request,res: Response){
    try{
        const page = await req.json()
        const skipPosts = ((Number(page)-1)*5)
        const posts = await prisma.post.findMany({
            skip:skipPosts,
            take:5,
        })

        return new Response(JSON.stringify({
            body:posts
        }))
    }
    catch(e){
        return new Response(JSON.stringify({error:e}))
    }
}