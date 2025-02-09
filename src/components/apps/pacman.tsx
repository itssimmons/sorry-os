"use client";

import App  from "@/components/ui/app";

const PacmanGame = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/pacman.png" />
        <App.Title>Pacman</App.Title>
      </App.Envelope>
      <App.Window width={470} height={620}>
        <iframe
          src="https://projectpacman.netlify.app/"
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

export default PacmanGame;
