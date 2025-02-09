"use client";

import App from "@/components/ui/app";

const MineSweeperGame = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/minesweeper.png" />
        <App.Title>Buscaminas</App.Title>
      </App.Envelope>
      <App.Window width={310} height={500}>
        <iframe
          src="https://minesweeper.one/buscaminas/"
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

export default MineSweeperGame;
