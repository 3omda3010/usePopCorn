import { useEffect } from "react";

export function useKey(action, theKey) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === theKey.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, theKey]
  );
}
