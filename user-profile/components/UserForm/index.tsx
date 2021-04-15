import {
  Form,
  Wreapper,
  Input,
  Label,
  Name,
  CompletedName,
  Birth,
  Id,
  Job,
  JobLabel,
} from "./style";

export default function UserForm() {
  return (
    <Form>
      <Wreapper>
        <Name>
          <Label htmlFor="firstName">Primeiro Nome</Label>
          <Input type="text" id="firstName" value="Baby" disabled />
          <Label htmlFor="secondName">Segundo Nome</Label>
          <Input type="text" id="secondName" value="Yoda" disabled />
          <CompletedName>
            <Label htmlFor="completedName">Nome completo</Label>
            <Input
              type="text"
              id="completedName"
              value="Baby Yoda Little Master"
              disabled
            />
          </CompletedName>
        </Name>

        <Birth>
          <Label htmlFor="birthDay">Data de nascimento</Label>
          <Input type="text" id="birthDay" value="01/01/1970" disabled />
          <Label htmlFor="age">Idade</Label>
          <Input type="text" id="age" value="50 anos" disabled />
        </Birth>
        <Id>
          <Label htmlFor="cpf">CPF</Label>
          <Input type="number" id="cpf" value="12312312345" disabled />
          <Label htmlFor="rg">RG</Label>
          <Input type="number" id="rg" value="543543541" disabled />
        </Id>
        <Job>
          <Label htmlFor="profession">Profissão</Label>
          <Input type="text" id="profession" value="Mestre Jedi" disabled />
          <JobLabel htmlFor="employer">
            Razão social da empresa que trabalha
          </JobLabel>
          <Input
            type="text"
            id="employer"
            value="Star Wars - Mandalorian LTDA"
            disabled
          />
        </Job>
      </Wreapper>
    </Form>
  );
}
