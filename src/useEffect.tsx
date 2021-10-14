import { useState, useEffect } from "react";
function UseEffect() {
  const [val, setVal] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal(val + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <div>{val}</div>;
}
export default UseEffect;
