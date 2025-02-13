"use client";

import App from "@/components/ui/app";

const PaintApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/paint.ico" />
        <App.Title>Paint</App.Title>
      </App.Envelope>
      <App.Window width={900} height={700}> 
        <iframe
          src="https://www.tldraw.com/"
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
