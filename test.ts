import { api } from 'node-app-store-connect-api';

const issuerId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
const apiKey = "XXXXXXXXXX";
const privateKey = `
----- BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXX
----- END PRIVATE KEY-----
`;

const { read } = await api({ issuerId, apiKey, privateKey, logRequests: true });

const result = await read('apps?limit=1');

console.log(JSON.stringify(result, null, 2));