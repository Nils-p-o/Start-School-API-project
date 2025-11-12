import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchImage(query = "duck") {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/random-photo?query=${query}`);
      const data = await res.json();

      if (res.ok && data && data[0]) {
        setImage(data[0].urls.small);
      } else {
        setError("No image found, try another word!");
      }
    } catch (err) {
      console.error("Error fetching image:", err);
      setError("Network or API error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center p-6">
      <h1 className="text-3xl font-bold">guess.exe 🕵️‍♂️</h1>

      <button
        onClick={() => fetchImage("dog")}
        className="bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-600"
      >
        Fetch Random Dog
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {image && (
        <img
          src={image}
          alt="random"
          className="rounded-2xl shadow-md max-w-xs"
        />
      )}
    </div>
  );
}
