import { useState } from "react";

export default function Home() {
  const [spent, setSpent] = useState({
    name: "",
    type: "",
    price: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;

    setSpent({
      ...spent,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Descrição</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="type">Tipo</label>
        <select id="type" name="type" onChange={handleChange}>
          <option value="moradia" selected>
            Moradia
          </option>
          <option value="alimentacao">Alimentação</option>
          <option value="transporte">Transporte</option>
          <option value="educacao">Educação</option>
        </select>

        <label htmlFor="price">Valor</label>
        <input
          type=""
          id="price"
          name="price"
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Descrição</th>
            <th>Tipo </th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>index</td>
            <td>{spent.name}</td>
            <td>{spent.type}</td>
            <td>{spent.price}</td>
          </tr>
        </tbody>
      </table>

      <p>Total</p>
    </>
  );
}

// ## Dicas
// - Nesse projeto em questão será permitido o uso de uma biblioteca de UI chamada Material UI;
// - Voce pode usar um ENUM para determinar quais tipos de gasto são válidos.
// - Na tabela, destaque os tipos de valores de alguma forma.
