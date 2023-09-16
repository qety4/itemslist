import prisma from "@/libs/prisma/client"

export async function POST(req:Request,res:Response){
    try{
        const postIdToDisplay = await req.json()
        const post = await prisma.post.findUnique({
            where:{
                id:postIdToDisplay
            }
        })
        return new Response(JSON.stringify({
            body:post
        }))
    }
    catch(e){
        return new Response(JSON.stringify({error:e}))
    }
}