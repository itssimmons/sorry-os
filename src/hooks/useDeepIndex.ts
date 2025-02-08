import useDeepIndexStore from "@/store/deepIndex.store";

export default function useDeepIndex() {
  const index = useDeepIndexStore((state) => state.index);
  const setIndex = useDeepIndexStore((state) => state.setIndex);

  return { index, setIndex };
}
