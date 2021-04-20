import { createContext, ReactNode, useState } from "react";

// interface User {
//   name: string;
//   birthday: Date;
//   cpf: string;
//   profession: string;
// }

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return;
  <UserContext.Provider
    value={{
      handleChange,
    }}
  >
    {props.children}
  </UserContext.Provider>;
};
