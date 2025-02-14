"use client";

import App from "@/components/ui/app";

const FlappyBirdGame = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/puzzle.webp" />
        <App.Title>Flappy Brid</App.Title>
      </App.Envelope>
      <App.Window width={300} height={450}>  
      <iframe
          src="https://flappybird.io/"
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

export default FlappyBirdGame;
