const http=require('http')
const app=http.createServer((request, response)=>{
    if(request.url === '/home'){
        response.write("home page")
        response.end();
    }
    else if(request.url === '/login'){
        response.write("login page")
        response.end();
    }
    else if(request.url === '/signup'){
        response.write("signup page")
        response.end();
    }else if(request.url === '/'){
        response.write("<html>")
           response.write("<title>Handson 1</title>")
            response.write("<body>")
                response.write("<h1>What is node?</h1><p>Node is an Open Source, Cross-Platform, Runtime environment of Javascript, Asynchronous and Single-Threaded in nature.</p>");
            response.write("</body>")
        response.write("</html>")
        response.end();
    }else if(request.url === '/json'){
        response.write(JSON.stringify([
            {Question:"what is node?"},
            {Answer:"Node is an Open Source, Cross-Platform, Runtime environment of JavaScript, Asynchronour and Single-Threaded in nature"},
        ]))
        response.end();        
    }
})
app.listen(4000)
