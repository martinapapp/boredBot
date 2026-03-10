# BoredBot

![JS Badge](https://img.shields.io/badge/Learning-JavaScript-yellow)
![API Badge](https://img.shields.io/badge/API-Scrimba-blue)

This is a project I built to practice working with APIs. I learned how to get data from a server and how to trigger DOM updates based on user interaction.

*[link here](https://bored-happy-bot.netlify.app/)*

## Index

- [About](#about)
- [Usage](#usage)
- [Development](#development)
- [Contrubution](#contribution)
- [License](#license)

---

## About
BoredBot is a simple activity generator designed to cure boredom. The main goal was to learn how to:

- Use `fetch()` to pull random activity suggestions from an API.
- Handle click events to trigger asynchronous network requests.
- Dynamically update text content and toggle CSS classes to change the UI state.
- It's currently hooked up to the Scrimba Bored API to simulate a real-time recommendation engine.


## Usage

### Installation
Since this project uses **Vite**, you'll need to install the dependencies first:

1. Clone the repo.
2. Run `npm install` to get Vite set up.
3. Run `npm run dev` to start the local server.
4. Click the link in your terminal (usually http://localhost:5173)

### Commands
I'm using Vite to make development faster. Here are the main scripts I use:

`npm run dev` - Starts the project so I can see changes live.

`npm run build` - Prepares the project for the real world (deployment).

`npm run preview` - Lets me check the build version locally.

## Development

 ### Pre-Requisites: 
 - text editor
 - browser

### File Structure

| No | File Name | What it does |
| ---- | ---------- | ------------- |
|1|index.html|The main UI entry point.|
|2|index.css|Custom styles and layout.|
|3|index.js| The logic for fetching activities and updating the DOM.|

### Build
The app centers around an event listener on the activity button. When clicked, it fetches a single JSON object from the Bored API. I then update the textContent of the activity display and the title, while adding a "fun" class to the main element to trigger a visual change in the layout.

## Contribution
1. Found a bug? Open an issue and I'll try to fix it.
2. Advice? If you have ideas for more "robotic" CSS animations, let me know!

### Guideline
I'm trying to keep this as "Vanilla" as possible—no frameworks allowed yet! I want to really understand the basics here.

## License
Feel free to use this for your own practice!  **MIT**  License.