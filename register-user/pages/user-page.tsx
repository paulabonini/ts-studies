import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Data, Header, UserContainer } from "../styles/user-page-styles";

export default function UserPage() {
  const { user } = useContext(UserContext);

  return (
    <UserContainer>
      <Header>
        <h1>Olá, {user.name}!</h1>
        <h2>Bem vindo ao lado negro da força! Aqui estão seus dados:</h2>
      </Header>
      <Data>
        Data de Nascimento: {user.birthDay} <br />
        CPF: {user.cpf} <br />
        Profissão: {user.profession}
      </Data>
    </UserContainer>
  );
}
