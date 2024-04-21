## Uma vez conectado na instancia:
- `sudo su` # Para se tornar root
- ~Instale o servidor do nodejs: `yum install nodejs`~ ou BROKEN
  - Step 1: Add node.js yum repository

First we need to add yum repository of node.js to our system which is sourced from nodejs’ official website. Run the following commands in succession to add the yum repository.

`yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -`

Step 1: Add node.js yum repository

First we need to add yum repository of node.js to our system which is sourced from nodejs’ official website. Run the following commands in succession to add the yum repository.

`yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -
`

Step 3: Verify versions

Having installed the packages, you need to check their versions.

For checking node.js version:

`node -v`

#output
v6.9.4


Step 4: Testing the installation

You can test your installation by creating a test file, say test_server.js

`vim test_server.js` or `nano test_server.js`

Then add the following content in the file.

`var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Welcome');
}).listen(3001, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3001/');`

Now start the web server using the below command

`node --debug test_server.js`

debugger listening on port 5858
Server running at http://127.0.0.1:3001/
