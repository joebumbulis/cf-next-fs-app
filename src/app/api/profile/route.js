export const runtime = 'edge'

export async function GET(request) {
  const isGetRequest = (request) => request.method === "GET";
//  const data = request.cf;

  // const generateRandomNumber = (tableCodes, max) => {
  //   const randomNumber = Math.floor(Math.random() * max);
  //   return tableCodes[randomNumber];
  // };

    const PRESHARED_AUTH_HEADER_KEY = "X-Custom-PSK";
    const PRESHARED_AUTH_HEADER_VALUE = "mypresharedkey";
    const psk = request.headers.get(PRESHARED_AUTH_HEADER_KEY);

    if (psk === PRESHARED_AUTH_HEADER_VALUE) {
      // Correct preshared header key supplied. Fetch request from origin.
      return fetch(request);
    }

    // Incorrect key supplied. Reject the request.
    return new Response("Sorry, you have supplied an invalid key.", {
      status: 403,
    });

  // const response = isGetRequest ? `Request.cf: ${data}` : "please use GET";

  // return new Response(response)
}