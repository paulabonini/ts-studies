import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserPage() {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>{user.name}</h1>
      <h2>{user.birthDay}</h2>
      <p>{user.cpf}</p>
      <span>{user.profession}</span>
    </main>
  );
}
