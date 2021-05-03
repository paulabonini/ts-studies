import RegisterForm from "../components/RegisterForm";
import { Container, LeftSide, RightSide } from "../styles/home-styles";

export default function Home() {
  return (
    <>
      <Container>
        <LeftSide>
          <img src="/assets/darth.png" alt="" />
        </LeftSide>
        <RightSide>
          <h1>Come to the dark side!</h1>
          <RegisterForm />
        </RightSide>
      </Container>
    </>
  );
}
