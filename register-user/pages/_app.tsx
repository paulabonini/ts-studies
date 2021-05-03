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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/user-page");
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
