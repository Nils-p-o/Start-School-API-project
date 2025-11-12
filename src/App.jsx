import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  function handleStart() {
    setStarted(true);
  }

  if (!started) {
    // Start screen
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center p-6">
        <h1 className="text-4xl font-bold">guess.exe 🕵️‍♂️</h1>
        <p className="text-lg text-gray-700">
          Welcome to the ultimate meme guessing game!
        </p>
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white rounded-xl px-6 py-3 hover:bg-blue-600"
        >
          Start Game
        </button>
      </div>
    );
  }

  // Game screen (placeholder for now)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center p-6">
      <h2 className="text-2xl font-bold">Game Started!</h2>
      <p>Here you’ll see images from the API and play the guessing game.</p>
    </div>
  );
}
