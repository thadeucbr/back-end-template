import { generateKeyPairSync } from 'crypto';
import fs from 'fs';
import path from 'path';

export default function newKey(): void {
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });
  const publicPem = publicKey.export({
    format: 'pem',
    type: 'pkcs1',
  }) as string;
  const privatePem = privateKey.export({
    format: 'pem',
    type: 'pkcs1',
  }) as string;

  fs.writeFileSync(path.join(__dirname, 'public.pem'), publicPem);
  fs.writeFileSync(path.join(__dirname, 'private.pem'), privatePem);
}