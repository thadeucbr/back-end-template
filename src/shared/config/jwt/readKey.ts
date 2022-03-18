import fs from 'fs';
import path from 'path';
import newKey from './generateKeyPair';

let publicKey: string;
let privateKey: string;

function readKeys() {
  publicKey = fs.readFileSync(path.join(__dirname, '/public.pem'), 'utf-8')
  privateKey = fs.readFileSync(path.join(__dirname, '/private.pem'), 'utf-8')
}

try {
  readKeys()
} catch (error) {
  newKey()
  readKeys()
}

export {
  publicKey,
  privateKey
};