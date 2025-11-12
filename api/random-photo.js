// api/random-photo.js

export default async function handler(req, res) {
  const { query } = req.query; // e.g. ?query=duck
  const apiKey = process.env.UNSPLASH_KEY;
  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
    query || "duck"
  )}&count=1`;

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Client-ID ${apiKey}` },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: `Unsplash API error: ${response.status}` });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Fetch failed:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
