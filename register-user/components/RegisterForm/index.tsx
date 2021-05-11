import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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
          type="date"
          id="birthDay"
          name="birthDay"
          max="2020-12-30"
          required
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <label htmlFor="cpf">CPF/CNPJ</label>
        <Input
          type="text"
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
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
