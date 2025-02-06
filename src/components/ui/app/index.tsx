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

import "@/polyfills/Number.clamp";

import styles from "./index.module.css";

export const AppEnvelope = ({
  children,
  onDoubleClick,
  ...props
}: AppEnvelopeProps) => {
  return (
    <Hammer
      options={{ recognizers: { doubletap: { enable: true } } }}
      onDoubleTap={onDoubleClick}
    >
      <div className={styles.envelope} {...props}>
        {children}
      </div>
    </Hammer>
  );
};

export const AppGrid = ({ children }: { children: ReactElement[] }) => {
  const [show, setShow] = useState<boolean>(false);

  const ChildrenMap = useMemo(() => {
    const childrenEntries = Array.from(children)
      .flatMap((child: ReactElement) => {
        if (child.type === AppWindow) return [["AppWindow", child]];
        if (child.type === AppEnvelope) {
          const EnvelopeChildrenMap = Array.from(
            (child.props as { children: ReactElement[] }).children
          )
            .map((child: ReactElement) => {
              if (child.type === AppIco) return ["AppIco", child];
              if (child.type === AppTitle) return ["AppTitle", child];
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

export const AppTitle = (props: { children: React.ReactNode }) => {
  return <p className={styles.title} {...props} />;
};

export const AppIco = (props: { src: string }) => {
  return (
    <Image className={styles.icon} alt="" width={26} height={26} {...props} />
  );
};

export const AppWindow = ({
  children,
  title,
  icon,
  useShow,
  width = "fit-content",
  height = "fit-content",
  closable = true,
  minimizeable = true,
}: {
  children: React.ReactNode;
  width?: number | "fit-content";
  height?: number | "fit-content";
  closable?: boolean;
  minimizeable?: boolean;
  title?: string;
  icon?: string;
  useShow?: () => [
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ];
}) => {
  const rafRef = useRef<number | null>(null);

  const [origin, setOrigin] = useState<Coords>({ x: 0, y: 0 });
  const [delta, setDelta] = useState<Coords>({ x: 0, y: 0 });

  const elementId = useMemo(() => `window-${title}`.toLowerCase(), [title]);

  const [show, setShow] = useShow!();

  useEffect(() => {
    const windowEl = document.getElementById(elementId);

    if (windowEl && show) {
      const originX = (window.innerWidth - windowEl.offsetWidth) / 2;
      const originY = (window.innerHeight - windowEl.offsetHeight) / 2;
      setOrigin({ x: originX, y: originY });
      setDelta({ x: originX, y: originY });
    }
  }, [show]);

  const updatePosition = (ev: HammerInput) => {
    const windowEl = document.getElementById(elementId);

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
      onPan={handlePan}
      onPanEnd={handlePanEnd}
    >
      <div
        id={elementId}
        className={styles.window}
        style={{
          width,
          height,
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
            {minimizeable && (
              <button
                role="button"
                data-minimize
                onClick={() => setShow(false)}
              >
                _
              </button>
            )}
            {closable && (
              <button type="button" data-close onClick={() => setShow(false)}>
                <Cross height="16px" />
              </button>
            )}
          </div>
        </header>
        <section className={styles.windowBody}>{children}</section>
      </div>
    </Hammer>
  );
};
