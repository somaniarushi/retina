import { useEffect, useState } from "react";

export default function Bubble({
  x,
  y,
  move=false,
}: {
  x: number;
  y: number;
  move?: boolean;
}) {
  const [locx, setLocx] = useState(x);
  const [locy, setLocy] = useState(y);

  // Every interval, we update the location of the bubble to represent floating.
  /*
  Update algorithm:
  - Given a probability of p, we either move the bubble up or we don't.
    - If we do move the bubble up, we displace it upwards by a random amount between 0 and 1.
  - Given a probability of q, we either move the bubble left or right.
    - If we do move the bubble left or right, we displace it left or right by a random amount between 0 and 1.
  */
  useEffect(() => {
    const interval = setInterval(() => {
      if (move) {
        const p = Math.random();
        const q = Math.random();
        const multiplier = 0.04;
        if (p < 0.5) {
          setLocy(locy - Math.random() * multiplier * 2);
        }
        if (q < 0.2) {
          setLocx(locx + Math.random() * multiplier);
        } else {
          setLocx(locx - Math.random() * multiplier);
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [locx, locy, move]);

  // The component is off the screen. Unmount it.
  if (locx < 0 && locy < 0) {
    return null;
  }

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        background: "#7c7c7c52",
        borderRadius: "50%",
        opacity: "0.5",
        position: "absolute",
        left: (locx / 100) * window.innerWidth,
        top: (locy / 100) * window.innerHeight,
      }}
    ></div>
  );
}
