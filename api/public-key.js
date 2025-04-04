const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const publicKey = fs.readFileSync(path.resolve('./public_key.txt'), 'utf8');
  res.setHeader('Content-Type', 'text/plain');
  res.send(publicKey);
}
