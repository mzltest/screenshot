let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser
import { getScreenshot } from './_lib/puppeteer';

exports.handler = async function http (request) {
  const usage = "https://s.vercel.app/api?url=https://google.com&width=1280&height=720"
  if (!request.queryStringParameters.url) return res.status(400).return  {
    statusCode: 400,
    headers: { 'content-type': 'image/png' },
    body: {'ok':false,'err':'no url'}
  try {
    const file = await getScreenshot(request.queryStringParameters.url, request.queryStringParameters.width, request.queryStringParameters.height);
    /**res.setHeader('Content-Type', `image/png`);
    res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
    res.status(200).end(file);
    **/
    return  {
    statusCode: 200,
    headers: { 'content-type': 'image/png' },
    body: file
  }
  } catch (error) {
    console.error(error)
   return  {
    statusCode: 400,
    body: {'ok':false,'err':'err'}
  }
}
