export default async function handler(req, res) {
  if (req.method === "GET") {
    const { query } = req.query;
    const apiKey = process.env.Api_Key;
    const apiUrl = `https://api.api-ninjas.com/v1/emoji?name=${query}`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const emojiData = await response.json();
      res.status(200).json(emojiData);
    } catch (error) {
      res.status(500).json({ message: "Request failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
