# Drum Kit

An interactive virtual drum kit web application built with vanilla JavaScript, HTML5, and CSS3. Users can play different drum instruments by clicking on the on-screen drum pads or by pressing corresponding keys on their keyboard.

**Live Demo:** [https://durnazeynalli.github.io/drum/](https://durnazeynalli.github.io/drum/)

## Features

- **Multiple Instruments:** Includes 7 distinct percussion sounds: Crash, Kick Bass, Snare, and Toms 1 through 4.
- **Dual Input Support:** Trigger drum sounds using either mouse clicks or corresponding keyboard keys.
- **Interactive Visuals:** Provides immediate visual button feedback and custom instrument graphics when each drum is played.
- **Zero External Dependencies:** Built purely with vanilla web technologies and native browser audio playback.

## Tech Stack

- **JavaScript (ES6+)**: Handles keyboard/click event listeners, sound mapping, and audio playback.
- **HTML5**: Semantic document structure for drum elements.
- **CSS3**: Layout, styling, and visual button animations.

## Project Structure

```text
drum/
├── css/
│   └── styles.css      # Styling and animation for drum pads
├── images/             # Visual assets for drum instruments (crash, kick, snare, toms)
├── js/
│   └── index.js        # Core audio trigger logic and event listeners
├── sounds/             # Audio files (.mp3) for each percussion sound
├── index.html          # Main HTML entry point
└── README.md
```

## Getting Started

Because this is a static client-side project, no package installation or build steps are required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/durnazeynalli/drum.git
   cd drum
   ```

2. **Run the project:**
   - Open `index.html` directly in your web browser, or
   - Serve it using a lightweight local web server (e.g., using Python: `python3 -m http.server 8000` or VS Code Live Server extension).
