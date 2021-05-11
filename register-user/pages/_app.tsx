import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import GlobalStyle from "../styles/global";

import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();

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
    const myInput = document.getElementById("cpf") as HTMLInputElement;
    myInput.setCustomValidity("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cpfPattern = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;

    const matcher = user.cpf.match(cpfPattern);

    const myInput = document.getElementById("cpf") as HTMLInputElement;

    if (!matcher) {
      myInput.setCustomValidity("Please, insert a valid number");
    } else {
      router.push("/user-page");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleChange,
        handleSubmit,
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default App;
