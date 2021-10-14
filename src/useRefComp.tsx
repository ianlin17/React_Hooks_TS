import { useRef } from "react";

function UserRefComp() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return <input ref={inputRef} />;
}
export default UserRefComp;
