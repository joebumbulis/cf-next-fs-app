export const runtime = 'edge'

export async function GET(request) {
  const isGetRequest = (request) => request.method === "GET";
  const max = 4;
  const tableCodes = {
    0: "1",
    1: "2",
    2: "3",
    3: "4"
  };

  const generateRandomNumber = (tableCodes, max) => {
    const randomNumber = Math.floor(Math.random() * max);
    return tableCodes[randomNumber];
  };

  const response = isGetRequest ? `Random Number Generated: ${generateRandomNumber(tableCodes, max)}` : "please use GET";

  return new Response(response);
}
