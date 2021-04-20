import { useState } from "react";

export default function Home() {
  let [state, setState] = useState({
    time: 0,
    price: 0,
  });

  const handleChange = (event) => {
    let value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let adicional = (state.time - 8) * (state.price * 1.5);

    let base = state.price * 8;
    let total = base + adicional;

    console.log(base, adicional, total);
  };

  return (
    <div className="container">
      <h1>Cálculo de horas trabalhadas</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="time">Horas trabalhadas</label>
        <input
          type="number"
          id="time"
          name="time"
          min={8}
          value={state.time}
          onChange={handleChange}
        />
        <label htmlFor="price">Valor Hora</label>
        <input
          type="number"
          id="price"
          name="price"
          min={20}
          value={state.price}
          onChange={handleChange}
        />
        <button type="submit">Calcular</button>
      </form>
      <table>
        <tr>
          <th>Base</th>
          <th>Adicional</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>valor x</td>
          <td>valor y</td>
          <td>valor x + y</td>
        </tr>
      </table>
    </div>
  );
}

// 1- O colaborador trabalha no mínimo 8h por dia (valor ideal) = R$ 160,00
// 2- A cada hora adicional (acima do ideal) de trabalho, ele recebe 50% a mais = R$30/h
// 3. O valor mínimo do salário/hora deve ser R$20,00
// 4. Os valores dos cálculos devem ser exibidos somente depois de clicar no botão "Calcular"

// time min 8
// price min 20
// if (time > 8) { price = price + 50% price}

//

// state.time state.price
//
//return :
//base = price * 8
//adicional = (time - 8) * (price + price/2)
//total = base + adicional
//
//
