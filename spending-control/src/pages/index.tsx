import { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";

import {
  Box,
  createStyles,
  FormControl,
  Grid,
  Input,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const [spentForm, setSpentForm] = useState({
    name: "",
    type: "",
    amount: "",
  });

  const [spentList, setSpentList] = useState([]);

  const handleChange = (event) => {
    let value = event.target.value;

    setSpentForm({
      ...spentForm,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = spentForm.name;
    const type = spentForm.type;
    const amount = spentForm.amount;

    setSpentList([...spentList, { name, type, amount }]);
  };

  return (
    <Container style={{ marginTop: 24 }}>
      <Paper style={{ padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                id="name"
                name="name"
                label="Descrição"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <InputLabel id="type-label">Tipo</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                name="type"
                fullWidth
                onChange={handleChange}
              >
                <MenuItem value="moradia">
                  <em>Moradia</em>
                </MenuItem>
                <MenuItem value="alimentacao">Alimentação</MenuItem>
                <MenuItem value="transporte">Transporte</MenuItem>
                <MenuItem value="educacao">Educação</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3}>
              <InputLabel>Valor</InputLabel>
              <Input
                fullWidth
                type="number"
                id="amount"
                name="amount"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        <Table style={{ marginTop: 24 }}>
          <TableHead>
            <TableRow>
              <TableCell>Número</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Tipo </TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spentList.map(({ name, type, amount }, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{amount}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">totalll</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

// add materialui

// ## Dicas
// - Nesse projeto em questão será permitido o uso de uma biblioteca de UI chamada Material UI;
// - Voce pode usar um ENUM para determinar quais tipos de gasto são válidos.
// - Na tabela, destaque os tipos de valores de alguma forma.
