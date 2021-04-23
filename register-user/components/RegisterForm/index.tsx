import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link";

import { Button, Form, FormField, Input } from "./style";

export default function RegisterForm() {
  const { handleChange, handleSubmit } = useContext(UserContext);

  return (
    <Form onSubmit={handleSubmit} name="form" id="form">
      <FormField>
        <label htmlFor="name">Nome completo</label>
        <Input
          type="text"
          id="name"
          name="name"
          minLength={3}
          required
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <label htmlFor="birthDay">Data de nascimento</label>
        <Input
          type="text"
          id="birthDay"
          name="birthDay"
          required
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <label htmlFor="cpf">CPF</label>
        <Input
          type="text"
          maxLength={11}
          id="cpf"
          name="cpf"
          required
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <label htmlFor="profession">Profissão</label>
        <Input
          type="text"
          id="profession"
          name="profession"
          required
          onChange={handleChange}
        />
      </FormField>
      <Link href={"/user-page"}>
        <Button type="submit">Cadastrar</Button>
      </Link>
    </Form>
  );
}

// 2. Não se preocupe com o formato do CPF, somente números no campo

//após o preechimento do formulário, redirecionar para a página de perfil de usuário para que possa verificar minhas informações cadastradas no sistema
//-- Use Query parameters
//utilizar o recurso de roteamento do NextJS para passar informação de uma página pra outra
