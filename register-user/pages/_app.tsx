import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

function App({ Component, pageProps }) {
  const [user, setUser] = useState({
    name: "",
    birthDay: "",
    cpf: "",
    profession: " ",
  });

  const handleChange = (event) => {
    let value = event.target.value;

    setUser({
      ...user,
      [event.target.name]: value,
    });

    console.log(value);
    console.log(user.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = user.name;
    const birthDay = user.birthDay;
    const cpf = user.cpf;
    const profession = user.profession;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleChange,
        handleSubmit,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default App;
