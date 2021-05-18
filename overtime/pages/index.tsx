import { useState } from "react";

import styles from "../styles/home.module.scss";

export default function Home() {
  let [salary, setSalary] = useState({
    adicional: 0,
    base: 0,
    total: 0,
  });

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

  const calcSalary = (event) => {
    event.preventDefault();

    const adicional = (state.time - 8) * (state.price * 1.5);
    const base = state.price * 8;
    const total = base + adicional;

    setSalary({
      adicional,
      base,
      total,
    });
  };

  return (
    <div className={styles.container}>
      <h1>Cálculo de horas trabalhadas</h1>
      <form id="form" onSubmit={calcSalary}>
        <div className={styles.formFields}>
          <div className={styles.field}>
            <label htmlFor="time">Horas trabalhadas</label>
            <input
              type="number"
              id="time"
              name="time"
              min={8}
              value={state.time}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="price">Valor Hora</label>
            <input
              type="number"
              id="price"
              name="price"
              min={20}
              value={state.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit">Calcular</button>
      </form>
      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>Base</th>
            <th>Adicional</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {salary.base.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td>
              {salary.adicional.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td>
              {salary.total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
