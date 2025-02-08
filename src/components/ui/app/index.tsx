import { Cross } from "geist-icons";
import Image from "next/image";
import React, {
  JSX,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Hammer from "react-hammerjs";

import useDeepIndex from "@/hooks/useDeepIndex";
import "@/polyfills/Number.clamp";

import styles from "./index.module.css";
import withPortal from "@/hoc/withPortal";


namespace App {
  export const Envelope = ({
    children,
    onDoubleClick,
    title,
    ...props
  }: EnvelopeProps) => {
    const { index, setIndex } = useDeepIndex();

    const elementId = useMemo(
      () =>
        `window-${title}`
          .split(" ")
          .join("-")
          .replace(/[^\x00-\x7F]/g, "")
          .toLowerCase(),
      [title]
    );

    const bringToFront = () => {
      const windowEl = document.querySelector<HTMLDivElement>(`#${elementId}`);
      if (windowEl) windowEl.style.zIndex = String(index + 1);
      setIndex(index + 1);
    };

    return (
      <Hammer
        options={{ recognizers: { doubletap: { enable: true } } }}
        onDoubleTap={(ev) => {
          bringToFront();
          onDoubleClick?.(ev);
        }}
      >
        <div className={styles.envelope} {...props}>
          {children}
        </div>
      </Hammer>
    );
  };

  export const Grid = ({ children }: { children: ReactElement[] }) => {
    const [show, setShow] = useState<boolean>(false);

    const ChildrenMap = useMemo(() => {
      const childrenEntries = Array.from(children)
        .flatMap((child: ReactElement) => {
          if (child.type === App.Window) return [["AppWindow", child]];
          if (child.type === App.Envelope) {
            const EnvelopeChildrenMap = Array.from(
              (child.props as { children: ReactElement[] }).children
            )
              .map((child: ReactElement) => {
                if (child.type === App.Ico) return ["AppIco", child];
                if (child.type === App.Title) return ["AppTitle", child];
                return null;
              })
              .filter((item): item is [string, JSX.Element] => item !== null);

            return [...EnvelopeChildrenMap, ["AppEnvelope", child]];
          }
          return null;
        })
        .filter((item): item is [string, JSX.Element] => item !== null);

      return Object.fromEntries(childrenEntries) as Record<
        AppComponentNames,
        JSX.Element
      >;
    }, [children]);

    return (
      <div>
        {ChildrenMap.AppEnvelope &&
          React.cloneElement(
            ChildrenMap.AppEnvelope,
            {
              title: ChildrenMap.AppTitle.props.children,
              onDoubleClick(ev: React.MouseEvent) {
                ev.preventDefault();
                setShow(!show);
              },
            },
            [
              ChildrenMap.AppIco &&
                React.cloneElement(ChildrenMap.AppIco, { key: 1 }),
              ChildrenMap.AppTitle &&
                React.cloneElement(ChildrenMap.AppTitle, { key: 2 }),
            ]
          )}

        {ChildrenMap.AppWindow &&
          React.cloneElement(ChildrenMap.AppWindow, {
            useShow: () => [show, setShow],
            title: ChildrenMap.AppTitle.props.children,
            icon: ChildrenMap.AppIco.props.src,
          })}
      </div>
    );
  };

  export const Title = (props: { children: React.ReactNode }) => {
    return <p className={styles.title} {...props} />;
  };

  export const Ico = (props: { src: string }) => {
    return (
      <Image className={styles.icon} alt="" width={26} height={26} {...props} />
    );
  };

  export const Window = ({
    children,
    title,
    icon,
    useShow,
    onReady,
    width = "fit-content",
    height = "fit-content",
  }: {
    children: React.ReactNode;
    width?: number | "fit-content";
    height?: number | "fit-content";
    title?: string;
    icon?: string;
    onReady?: () => void;
    useShow?: () => [
      show: boolean,
      setShow: React.Dispatch<React.SetStateAction<boolean>>
    ];
  }) => {
    const [show, setShow] = useShow!();
    const { index, setIndex } = useDeepIndex();

    const rafRef = useRef<number | null>(null);

    const [origin, setOrigin] = useState<Coords>({ x: 0, y: 0 });
    const [delta, setDelta] = useState<Coords>({ x: 0, y: 0 });

    const elementId = useMemo(
      () =>
        `window-${title}`
          .split(" ")
          .join("-")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^\x00-\x7F]/g, "")
          .replace(/[^a-zA-Z0-9-]/g, "")
          .toLowerCase(),
      [title]
    );

    useEffect(() => {
      const windowEl = document.querySelector<HTMLDivElement>(`#${elementId}`);

      if (windowEl && show) {
        const originX = (window.innerWidth - windowEl.offsetWidth) / 2;
        const originY = (window.innerHeight - windowEl.offsetHeight) / 2;
        setOrigin({ x: originX, y: originY });
        setDelta({ x: originX, y: originY });

        onReady?.();
      }
    }, [show]);

    const updatePosition = (ev: HammerInput) => {
      const windowEl = document.querySelector<HTMLDivElement>(`#${elementId}`);

      if (origin && windowEl) {
        const newDeltaX = Number(origin.x + ev.deltaX).clamp(
          0,
          window.innerWidth - windowEl.offsetWidth
        );
        const newDeltaY = Number(origin.y + ev.deltaY).clamp(
          0,
          window.innerHeight - windowEl.offsetHeight
        );

        setDelta({ x: newDeltaX, y: newDeltaY });
      }
    };

    const handlePanEnd = () => {
      setOrigin({ x: delta.x, y: delta.y });
    };

    const handlePan = (ev: HammerInput) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => updatePosition(ev));
    };

    const handlePanStart = () => {
      const windowEl = document.querySelector<HTMLDivElement>(`#${elementId}`);
      if (windowEl) windowEl.style.zIndex = String(index + 1);
      setIndex(index + 1);
    };

    useEffect(() => {
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, []);

    if (!show) return <></>;

    return (
      <Hammer
        options={{
          recognizers: {
            pan: { enable: true },
          },
        }}
        onPanStart={handlePanStart}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
      >
        <div
          id={elementId}
          className={styles.window}
          style={{
            width,
            height,
            zIndex: 999,
            transform: `translateX(calc(${delta.x}px))
              translateY(calc(${delta.y}px))`,
          }}
        >
          <header className={styles.windowHeader}>
            <div>
              <Image src={icon as string} alt="" width={20} height={20} />
              <strong>{title}</strong>
            </div>

            <div>
              <button
                role="button"
                data-minimize
                onClick={() => setShow(false)}
              >
                _
              </button>
              <button type="button" data-close onClick={() => setShow(false)}>
                <Cross height="16px" />
              </button>
            </div>
          </header>
          <section className={styles.windowBody}>{children}</section>
        </div>
      </Hammer>
    );
  };

  export const WindowPortal = (props: {
    children: React.ReactNode;
    title: string;
    icon: string;
    width?: number | "fit-content";
    height?: number | "fit-content";
    useShow?: () => [
      show: boolean,
      setShow: React.Dispatch<React.SetStateAction<boolean>>
    ];
  }) => {
    const WindowPortal = withPortal(
      <App.Window {...props}>{props.children}</App.Window>
    );

    return <WindowPortal />;
  };
}

export default App;
