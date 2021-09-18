import * as http from 'http'

const server = http.createServer()

server.on('request', (request: http.IncomingMessage, response: http.ServerResponse) => {
    console.log('method:', request.method)
    console.log('url:', request.url)
    console.log('headers:', request.headers)

    response.end('end')
})

server.listen(8888)