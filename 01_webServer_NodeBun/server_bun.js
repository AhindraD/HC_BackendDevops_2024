import {serve} from "bun"

const PORT= 3000
const HOSTNAME= '127.0.0.1'

serve({
    fetch(req){
        console.log(req.url)
        const url= new URL(req.url)
        if(url.pathname==="/"){
            return new Response({message:"Hello from Bun server"},{status:200})
        }
        else if(url.pathname==="/me"){
            return new Response({message:"Hello ME from Bun server"},{status:200})
        }
        else{
            return new Response({message:"Not found 404"},{status:404})
        }
    },
    port: PORT,
    hostname: HOSTNAME,
})