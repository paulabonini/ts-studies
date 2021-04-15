// import Head from 'next/head'
import GlobalStyle from "../global";

import Header from "../components/Header";
import UserForm from "../components/UserForm";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <UserForm />
    </>
  );
}
