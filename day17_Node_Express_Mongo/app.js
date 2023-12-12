import http from 'http';


const server= http.createServer();

const port= 5000;

console.log(server)

server.listen(port,()=>console.log(`server is running on port ${port}`))

// console.log(http)