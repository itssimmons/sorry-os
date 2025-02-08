"use client";

import App from "@/components/ui/app";

const DinoGame = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/dino.webp" />
        <App.Title>Dino</App.Title>
      </App.Envelope>
      <App.Window width={555} height={333}>
        <iframe
          id="dino-game"
          src="https://chromedino.com/"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
        <style type="text/css">{`iframe#dino-game { position: absolute; width: 544px; height: 287px; z-index: 999; }`}</style>
      </App.Window>
    </App.Grid>
  );
};

export default DinoGame;
