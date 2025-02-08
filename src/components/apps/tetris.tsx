"use client";

import App from "@/components/ui/app";

const TetrisGame = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/tetris.webp" />
        <App.Title>Tetris</App.Title>
      </App.Envelope>
      <App.Window width={334} height={668}>
        <iframe
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="100%"
          loading="lazy"
          src="https://dionyziz.com/graphics/canvas-tetris/"
        />
      </App.Window>
    </App.Grid>
  );
};

export default TetrisGame;
