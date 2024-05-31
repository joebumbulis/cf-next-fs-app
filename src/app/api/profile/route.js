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

  const response = await fetch(origin, {
    headers: {
      "Auth-Token": kvValue,
    }
  })

  return response;
}