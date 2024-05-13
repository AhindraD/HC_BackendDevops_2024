const http= require('http');

const HOSTNAME= '127.0.0.1';
const PORT= 3000;

const server= http.createServer((req,resp)=>{
    if (req.url==="/") {
        resp.statusCode= 200;
        resp.setHeader("Content-Type","json");
        resp.end('{"message":"Hello from Node server"}');
    }
    else if (req.url==="/me") {
        resp.statusCode= 200;
        resp.setHeader("Content-Type","json");
        resp.end('{"message":"Hello me from Node server"}');
    }
    else{
        resp.statusCode= 404;
        resp.setHeader("Content-Type","json");
        resp.end('{"message":"Not found 404"}');
    }
})


server.listen(PORT,HOSTNAME,()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT}`);
})