import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge'

export async function GET(request) {

  const userId = request.headers.get('user-id');
  const myKv = getRequestContext().env.kv_user_IDs;
  const kvValue = await myKv.get(userId) || false;

  if (!userId || !kvValue) {
    return new Response('Missig or Incorrect UserId', { status: 400 });
  }

  return new Response(`User ID: ${kvValue}`, {
    headers: {'Content-Type': 'text/plain'},
  });
}