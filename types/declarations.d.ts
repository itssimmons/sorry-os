// types
type Coords = {
  x: number;
  y: number;
};

type Credentials = { password: string };

type AppComponentNames = "AppWindow" | "AppTitle" | "AppIco" | "AppEnvelope";

// props
interface EnvelopeProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "onDoubleClick"> {
  onDoubleClick?: HammerListener;
}

// models
interface User {
  id: number;
  username: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

interface Chat {
  id: number;
  senderId: number;
  message: string;
  mimeType: string;
  avatar: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}
