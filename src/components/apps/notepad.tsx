"use client";

import App from "@/components/ui/app";

const NotepadApp = ({
  children,
  title,
}: {
  children: string;
  title: string;
}) => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/os/514.ico" />
        <App.Title>{title}</App.Title>
      </App.Envelope>
      <App.Window width={430} height={525}>
        <textarea
          defaultValue={children}
          style={{
            border: "none",
            outline: "none",
            resize: "none",
            width: "100%",
            height: "100%",
            padding: 8,
            fontSize: 16,
          }}
        />
      </App.Window>
    </App.Grid>
  );
};

export default NotepadApp;
