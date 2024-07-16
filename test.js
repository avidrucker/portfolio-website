/* eslint-disable no-undef */
// built project served without express from the dist folder
import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  const filePath = path.join('dist', req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain'});
      res.end('Not Found');
    } else {
      // if file is js or css or html
      if (filePath.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript'});
      } else if (filePath.endsWith('.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css'});
      }
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});