"use client";

import Search from "@/components/icon/search";
import App from "@/components/ui/app";

const InternetExplorerApp = () => {
  // const [binary, setBinary] = useState<1 | 0>(0);

  // useEffect(() => {
  //   const iframe =
  //     document.querySelector<HTMLIFrameElement>("#google-cse-iframe");
  //   const iframeDocument = iframe?.contentDocument;
  //   const script = document.createElement("script");
  //   script.src = "https://cse.google.com/cse.js?cx=30d52710d0ee34bc6";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   iframeDocument?.appendChild(script);

  //   return () => {
  //     script.remove();
  //   };
  // }, [binary]);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const data = Object.fromEntries(new FormData(ev.target as HTMLFormElement));

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("q", data.prompt as string);

    // setBinary((binary) => (binary === 0 ? 1 : 0));
    window.history.pushState({}, "", `/os?${searchParams.toString()}`);
  };

  return (
    <>
      <App.Grid>
        <App.Envelope>
          <App.Ico src="/logos/internet-explorer.png" />
          <App.Title>Internet Explorer</App.Title>
        </App.Envelope>
        <App.Window width={800} height={490}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", alignItems: "center", columnGap: 4 }}
            >
              <input
                style={styles.input}
                placeholder="¿En qué estás pensando?"
                name="prompt"
                type="text"
              />
              <button style={styles.button} type="submit">
                <Search style={{ color: "black" }} />
              </button>
            </div>

            <iframe
              id="google-cse-iframe"
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="100%"
              loading="lazy"
              style={styles.searchResults}
            ></iframe>
          </form>
        </App.Window>
      </App.Grid>
    </>
  );
};

export default InternetExplorerApp;

const styles: { [k: string]: React.CSSProperties } = {
  form: {
    display: "flex",
    flexDirection: "column",
    rowGap: 4,
  },
  input: {
    width: "100%",
    height: 40,
    paddingInline: 8,
    border: "1px solid black",
    outline: "none",
    resize: "none",
    borderRadius: 4,
    fontSize: 16,
    flex: 1,
  },
  button: {
    display: "grid",
    placeItems: "center",
    border: "none",
    width: 40,
    height: 40,
    backgroundColor: "#e8e8e8",
    borderRadius: 4,
    flexBasis: 40,
  },
  iframe: {
    border: "none",
    borderRadius: 4,
    overflow: "hidden",
    outline: "none",
    width: "100%",
    height: 400,
  },
  search: {
    color: "black",
  },
  searchResults: {
    height: 400,
    overflowX: "hidden",
    overflowY: "scroll",
    borderRadius: 4,
  },
};
