import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

export const useWatchLater = () => {
  const [watchLater, setWatchLater] = useLocalStorage<number[]>(
    "watch-later",
    []
  );

  const toggleWatchLater = useCallback(
    (id: number) => {
      if (watchLater.includes(id)) {
        setWatchLater(
          watchLater.filter((watchLater: number) => watchLater !== id)
        );
      } else {
        setWatchLater([...watchLater, id]);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [watchLater]
  );

  return {
    watchLater,
    toggleWatchLater,
  };
};
