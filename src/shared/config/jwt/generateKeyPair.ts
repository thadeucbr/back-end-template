import { generateKeyPair } from 'crypto';
import fs from 'fs';
import path from 'path';

export default function newKey(): void {
  generateKeyPair(
    'ec',
    {
      namedCurve: 'secp256k1',
      publicKeyEncoding: {
        type: 'spki',
        format: 'der',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'der',
      },
    },
    (err, publicKey, privateKey) => {
      if (!err) {
        fs.writeFileSync(
          path.join(__dirname, 'public.pem'),
          publicKey.toString('hex').trim(),
        );
        fs.writeFileSync(
          path.join(__dirname, 'private.pem'),
          privateKey.toString('hex').trim(),
        );
      } else {
        console.log('Errr is: ', err);
      }
    },
  );
}
