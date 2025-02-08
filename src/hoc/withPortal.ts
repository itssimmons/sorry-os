import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const withPortal = (
  WrappedComponent: ReactNode,
  containerId: string = "desktop"
) => {
  return () => {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
      const container = document.getElementById(containerId);
      setContainer(container);
    }, []);

    return container ? createPortal(WrappedComponent, container) : null;
  };
};

export default withPortal;
