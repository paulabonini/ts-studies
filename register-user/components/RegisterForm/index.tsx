import { useState } from "react";
import { Button, Form, FormField, Input } from "./style";

export default function RegisterForm() {
  const [cadastro, setCadastro] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submeteu");
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormField>
        <label htmlFor="completedName">Nome completo</label>
        <Input type="text" id="completedName" minLength={3} required />
      </FormField>
      <FormField>
        <label htmlFor="birthDay">Data de nascimento</label>
        <Input type="date" id="birthDay" required />
      </FormField>
      <FormField>
        <label htmlFor="cpf">CPF</label>
        <Input type="number" id="cpf" required />
      </FormField>
      <FormField>
        <label htmlFor="profession">Profissão</label>
        <Input type="text" id="profession" required />
      </FormField>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}

// 1. Todos os campos são obrigatórios, não deixe o usuário enviar o formulário caso não preencha todos
// 2. Não se preocupe com o formato do CPF, somente números no campo
// 3. Caso um input esteja inválido, deixe sua borda vermelha
// 4. O campo de nome deve ter pelo menos 3 caracteres
// 5. Não haverá nenhuma integração, portanto você pode utilizar o recurso de roteamento do NextJS para passar informação de uma página pra outra
