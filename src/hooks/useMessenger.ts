import { useEffect } from "react";

import { getCookie } from "@/lib/cookies";
import useMessengerStore from "@/store/messenger.store";

export default function useMessenger() {
  const session = useMessengerStore((state) => state.session);
  const setSession = useMessengerStore((state) => state.setSession);

  useEffect(() => {
    const session = getCookie("messenger_session");
    if (session) setSession(JSON.parse(session));
  }, []);

  return { session, setSession };
}
