import { useEffect, useState } from "react";

export default function StealthFailedToast({
  durationMs,
}: {
  durationMs: number;
}) {
  const [time, setTime] = useState(Math.floor(durationMs / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="flex h-full w-full flex-col"></div>;
}
