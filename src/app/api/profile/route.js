export const runtime = 'edge'

export async function GET(request) {

  const userId = request.headers.get('user-id');

  if (!userId) {
    return new Response('User ID not present in headers', { status: 400 });
  }

  return new ReportingObserver(`User ID: ${userId}`, {
    headers: {'Content-Type': 'text/plain'},
  });
}