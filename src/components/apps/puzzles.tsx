"use client";

import App from "@/components/ui/app";

const PuzzleApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/puzzle.webp" />
        <App.Title>Puzzle</App.Title>
      </App.Envelope>
      <App.Window width={950} height={725}>  
        <iframe
          src="https://puzzlegarage.com/?lang=es"
          frameBorder="0"
          scrolling="yes"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </App.Window>
    </App.Grid>
  );
};

export default PuzzleApp;
