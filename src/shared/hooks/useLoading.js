import { useCallback, useState } from "react";
import { showError } from "../helpers/tosts/showError";

function useLoading(startValue = false) {
  const [loading, setLoading] = useState(startValue);

  const startLoading = useCallback(async (callbackFn) => {
    try {
      setLoading(true);
      const result = await callbackFn();
      return result;
    } catch (error) {
      if (error.message !== "canceled") {
        showError(error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return [loading, startLoading];
}

export default useLoading;
