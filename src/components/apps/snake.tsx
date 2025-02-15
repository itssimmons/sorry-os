"use client";

import App from "@/components/ui/app";

const SnakeGame = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/snake.png" />
        <App.Title>Snake</App.Title>
      </App.Envelope>
      <App.Window width={530} height={630}>
        <iframe
          id="snake-game"
          src="https://mahmoud-8.github.io/snake-game/"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </App.Window>
    </App.Grid>
  );
};

export default SnakeGame;
