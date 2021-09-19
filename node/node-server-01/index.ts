import * as http from 'http'
import {IncomingMessage, ServerResponse} from "http";

const server = http.createServer()

server.on('request', (request:IncomingMessage, response: ServerResponse) => {
    console.log('method:', request.method)
    console.log('url:', request.url)
    console.log('headers:', request.headers)

    response.end('hi')
})

server.listen(8888)
