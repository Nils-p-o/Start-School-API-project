# [Your Project Name]

## Team Members
- Member 1 - [Nils Ozols]
- Member 2 - [Agnese Misane]
- Member 3 - [Carlos Mestre]

## Project Description
This game uses public image APIs (like random dogs, ducks, cars, or space photos) to create a quick, hilarious guessing challenge for friends.
In each round, everyone sees the same image — except one player, the impostor, who must bluff their way through conversation to guess what the image actually is.
It’s a light, memeable party game that blends deduction, humor, and chaos — playable locally or online.

## Problem Statement
Most online party games require accounts, servers, or subscriptions, making it hard for friends to play something spontaneous and funny together.
This app solves that by offering a lightweight, instantly playable social game powered by free public APIs, where humor and creativity matter more than skill.
It’s designed for groups who want a quick laugh and social connection — whether on the couch or in a call.


## API Selection
**API Name:** Dog CEO API, Car Imagery API, Random Duck API, NASA APOD, Foodish API
  
**API Documentation:** https://dog.ceo/dog-api/ ;   
**Why this API?** [1-2 sentences]

### 2. GitHub Repository

**Required structure for now:**

project-name/
└── README.md

**README.md should include:**
- Project title
- Brief description
- Team members
- API being used

## App Description
This game uses public image APIs (like random dogs, ducks, cars, or space photos) to create a quick, hilarious guessing challenge for friends.
In each round, everyone sees the same image — except one player, the impostor, who must bluff their way through conversation to guess what the image actually is.
It’s a light, memeable party game that blends deduction, humor, and chaos — playable locally or online.

## Problem statement
Most online party games require accounts, servers, or subscriptions, making it hard for friends to play something spontaneous and funny together.
This app solves that by offering a lightweight, instantly playable social game powered by free public APIs, where humor and creativity matter more than skill.
It’s designed for groups who want a quick laugh and social connection — whether on the couch or in a call.




Gameplay Loop

Setup:

Players join a lobby via code or link.

One random player is secretly assigned as the impostor.

A random image is fetched from a public API (for example):

🐶 Dog: Dog CEO API

🚗 Car: Car Imagery API

🦆 Duck: Random Duck API

🌌 Space: NASA APOD

🍕 Food: Foodish API

Everyone except the impostor sees the image.

Discussion Phase (30–60 seconds):

Players describe the image without saying exactly what it is.
Example: “It looks like something you might pet,” or “Definitely not edible.”

The impostor listens, trying to piece together what it might be.

Guess Phase:

The impostor either:

🕵️ Guesses what the image was (“Is it a duck?”)

Or 🎭 tries to blend in by giving a vague but confident description.

Everyone votes on who they think the impostor is.

Reveal & Points:

If the impostor is found → everyone else gets points.

If the impostor guesses correctly → the impostor gets bonus points.

Image and API are revealed (“It was… a very confused pug!”)

Next Round:

New API, new image, new impostor.

🧠 Why It Works

Memeable moments: Every round produces a hilarious screenshot or quote.

Low barrier: Anyone can play with just a browser — no downloads.

Endless variety: Public APIs mean infinite image categories.

Social + chaotic: Encourages creative lying and wordplay.

Streamable: Perfect for Twitch or TikTok creators.

🔮 Optional Variations

“Theme Mode” – All images from a single category (e.g., only animals or foods).

“Chaos Mode” – Mix APIs mid-round (everyone sees a different image).

“Emoji Only” – Players can only describe using emojis.

“Voice Round” – Voice chat with time limit (like “Jackbox” style).

⚙️ Tech Stack Ideas

Frontend: React + Tailwind + WebSockets (for real-time updates)

Backend: Node.js + Express + Socket.IO

APIs: Dog CEO, Random Duck, NASA, Unsplash, Pokémon, etc.

Hosting: Vercel / Netlify (for frontend), Render / Fly.io (for backend)

🎨 Example Round

Category: “Dog, Truck, or Duck?”

Image (from API): a golden retriever.

Player A: “It looks like something you’d find at the park.”
Player B: “Not something you’d drive.”
Impostor: “I think it’s… a duck?”
Everyone: 🤣 “Vote them out!”
