// types
type Coords = {
  x: number
  y: number
};

type Credentials = { password: string };

type AppComponentNames = "AppWindow" | "AppTitle" | "AppIco" | "AppEnvelope"

// props
interface EnvelopeProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "onDoubleClick"> {
  onDoubleClick?: HammerListener;
}
