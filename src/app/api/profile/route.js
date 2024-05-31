import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge'

export async function GET(request) {

  const userId = request.headers.get('user-id');
  const myKv = getRequestContext().env.kv_user_IDs;
  const kvValue = await myKv.get(userId) || false;
  const origin = "www.joebumbulis.com"

  if (!userId || !kvValue) {
    return new Response('Missig or Incorrect UserId', { status: 400 });
  }

  return await fetch(origin, {
    headers: {
      "Auth-Token": kvValue,
    }
  })

  // let newRequest = new Request(request);
  // newRequest.headers.set("Auth-Token", kvValue)
  // return new Response()
  // return new Response(`User ID: ${kvValue}`, {
  //   headers: {'Content-Type': 'text/plain'},
  // });
}