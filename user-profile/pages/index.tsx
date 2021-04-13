// import Head from 'next/head'

export default function Home() {
  return (
    <>
      <header>
        <img src="/assets/profile.png" alt="Profile Image" />
        <h1>Baby Yoda</h1>
      </header>
      <form>
        <div className="name">
          <label htmlFor="firstName">Primeiro Nome</label>
          <input type="text" id="firstName" placeholder="Baby" disabled />
          <label htmlFor="secondName">Segundo Nome</label>
          <input type="text" id="secondName" placeholder="Yoda" disabled />
        </div>
        <label htmlFor="completedName">Nome completo</label>
        <input
          type="text"
          id="completedName"
          placeholder="Baby Yoda Little Master"
          disabled
        />
        <div className="birth">
          <label htmlFor="birthDay">Data de nascimento</label>
          <input type="text" id="birthDay" placeholder="01/01/1970" disabled />
          <label htmlFor="age">Idade</label>
          <input type="text" id="age" placeholder="50 anos" disabled />
        </div>
        <div className="id">
          <label htmlFor="cpf">CPF</label>
          <input type="number" id="cpf" placeholder="12312312345" disabled />
          <label htmlFor="rg">RG</label>
          <input type="number" id="rg" placeholder="543543541" disabled />
        </div>
        <div className="job">
          <label htmlFor="profession">Profissão</label>
          <input
            type="text"
            id="profession"
            placeholder="Mestre Jedi"
            disabled
          />
          <label htmlFor="employer">Razão social da empresa que trabalha</label>
          <input
            type="text"
            placeholder="Star Wars - Mandalorian LTDA"
            disabled
          />
        </div>
      </form>
    </>
  );
}

// primeiro nome,
// segundo nome,
// nome completo,
// data de nascimento,
// idade,
// profissão,
// razão social da empresa onde trabalha,
// imagem de perfil,
// cpf e RG.
