"use client";

import App from "@/components/ui/app";

const PaintApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/paint.ico" />
        <App.Title>Paint</App.Title>
      </App.Envelope>
      <App.Window width={950} height={725}>  
        <iframe
          src="https://excalidraw.com/"
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

export default PaintApp;
