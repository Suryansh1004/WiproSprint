const { createServer, request } = require('http');

const server = createServer((request,Response) =>
{
    Response.writeHead(200, {'Content-Type': 'text/html'});
    Response.write('<h1>Welcome To Node JS </h1>');
    return Response.end();
});

server.listen(4000);
