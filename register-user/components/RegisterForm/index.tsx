import { useState } from "react";
import { Button, Form, FormField, Input } from "./style";

export default function RegisterForm() {
  return (
    <Form action="">
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
        <Input type="text" maxLength={11} id="cpf" required />
      </FormField>
      <FormField>
        <label htmlFor="profession">Profissão</label>
        <Input type="text" id="profession" required />
      </FormField>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}

// 2. Não se preocupe com o formato do CPF, somente números no campo
