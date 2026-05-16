import { useEffect, useState } from "react";

function useConnect() {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(function () {
    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });

    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });
  }, []);

  return networkStatus;
}

export default useConnect;
