export default async function handler(request, response) {
  if (request.method === "GET") {
    const Api_Key = process.env.Api_Key;
    const URL = `https://api.api-ninjas.com/v1/emoji?name=dog`;
    try {
      const emojiResponse = await fetch(URL);
      const emoji = await emojiResponse.json();
      response.status(200).json({ results: emoji.results });
    } catch (error) {
      response.status(500).json({ message: "error" });
    }
  } else {
    response.status(405).json({ message: "method not allowed" });
  }
}
