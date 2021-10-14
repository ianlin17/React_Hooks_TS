import UserContext, { UserState } from "./store";
import { useContext, useState } from "react";

function Consumer() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <p>First: {user.first}</p>
      <p>Last: {user.last}</p>
    </div>
  );
}

function UserContextComp() {
  const [user, setUser] = useState<UserState>({
    first: "Jane",
    last: "Smith",
  });
  return (
    <UserContext.Provider value={user}>
      <Consumer />
      <button onClick={() => setUser({ first: "Change", last: "Chang" })}>
        Change Name
      </button>
    </UserContext.Provider>
  );
}

export default UserContextComp;
