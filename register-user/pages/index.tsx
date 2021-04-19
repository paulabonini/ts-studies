import RegisterForm from "../components/RegisterForm";
import GlobalStyle from "../global";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <section className="leftSide">
          <img src="/assets/darth.png" alt="" />
        </section>
        <section className="rightSide">
          <h1>Come to the dark side!</h1>
          <RegisterForm />
        </section>
      </div>
    </>
  );
}
