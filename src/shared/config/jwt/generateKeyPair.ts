import { generateKeyPair } from 'crypto';
import fs from 'fs';
import path from 'path';

export default function newKey(): void {
  generateKeyPair(
    'rsa',
    {
      modulusLength: 1024 * 2,
      publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
      },
      privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: 'passphrase'
      }
    },
    (err, publicKey, privateKey) => {
      if (!err) {
        fs.writeFileSync(
          path.join(__dirname, 'public.pem'),
          publicKey.trim(),
        );
        fs.writeFileSync(
          path.join(__dirname, 'private.pem'),
          privateKey.trim(),
        );
      } else {
        console.log('Errr is: ', err);
      }
    },
  );
}