'use server'

export async function POST(req:Request){
    try{
        console.log(req.body)
        return new Response('ok')
    }catch(e){

    }
}