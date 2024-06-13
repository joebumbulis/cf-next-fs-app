import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge'

export async function GET(request) {

  // const userId = request.headers.get('user-id');
  // const myKv = getRequestContext().env.kv_user_IDs;
  // const kvValue = await myKv.get(userId) || false;
  // const origin = "www.joebumbulis.com"

  // if (!userId || !kvValue) {
  //   return new Response('Missig or Incorrect UserId', { status: 400 });

  const location = request.cf.city || request.cf.region || request.cf.country;

  const input = { prompt: "What is the origin of the phrase Hello, World" }

  const answer = await getRequestContext().env.AI.run('@cf/meta/llama-3-8b-instruct', input);

  return Response.json(answer);
 

  // const response = location;

  // return new Response(response);
}
