"use client";

import App from "@/components/ui/app";

const GiftApp = () => {
  // https://gifft.me/es/o/s/q4hkwyxo0sond1s3xbkca3hj
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/gift.png" />
        <App.Title>Regalico 1</App.Title>
      </App.Envelope>
      <App.Window width={555} height={333}>
        <iframe
          src="https://gifft.me/es/o/s/q4hkwyxo0sond1s3xbkca3hj"
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

export default GiftApp;
