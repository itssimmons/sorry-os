"use client";

import { useState } from "react";

import {
  AppEnvelope,
  AppGrid,
  AppIco,
  AppTitle,
  AppWindow,
} from "@/components/ui/app";

const NotepadApp = () => {
  const [text, setText] = useState<string>("");

  return (
    <AppGrid>
      <AppEnvelope>
        <AppIco src="/os/422.ico" />
        <AppTitle>Bloc de Notas</AppTitle>
      </AppEnvelope>
      <AppWindow width={400} height={525}>
        <textarea
          onChange={(ev) => setText(ev.target.value)}
          value={text}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
          }}
        />
      </AppWindow>
    </AppGrid>
  );
};

export default NotepadApp;
