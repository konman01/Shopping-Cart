const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // if the uncomming url is "/"
if (url === '/') {
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();

}

// if the url is '/message' and method = 'POST'
if (url === '/message' && method === 'POST') {

    const body = [];

    // get the data in chunks
    req.on('data', (chunck) => {
        console.log(chunck);
        body.push(chunck);
    });

    // All the chunks are received, end
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        /*fs.writeFileSync('message.txt', message);*/ // Syncronous Mode, if the file is too big, the next codes will not excuted
        // so use writeFile method
        
        fs.writeFile('message.txt', message, (error) => {
            // redisrecting the request to '/' url 
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        
    });

    
}

res.setHeader('Content-type', 'text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1>Hello from my node server</h1></body>');
res.write('</html>');
res.end();
    
}

// ways to export the package
/*module.exports = requestHandler;*/

/*module.exports = {
    handler: requestHandler,
    someText: 'Some text baby'
}*/

/*module.exports.handler = requestHandler;
module.exports.someText = 'Some text baby';*/

exports.handler = requestHandler;
exports.someText = 'Some text baby';

