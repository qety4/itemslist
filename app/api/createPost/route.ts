'use server'
import prisma from "@/prisma/client"

export async function POST(req:Request,res:Response){
    try{
        const postToAdd = await req.json()
        console.log(postToAdd)
        await prisma.post.create({
            data:{
                ...postToAdd
            }
        })
        return new Response('post set')
    }
    catch(e){
        return new Response(JSON.stringify({error:e}))
    }
}