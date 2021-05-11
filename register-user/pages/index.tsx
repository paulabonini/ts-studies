import RegisterForm from "../components/RegisterForm";
import {
  Container,
  BannerContainer,
  FormContainer,
} from "../styles/home-styles";

export default function Home() {
  return (
    <>
      <Container>
        <BannerContainer>
          <img src="/assets/darth.png" alt="" />
        </BannerContainer>
        <FormContainer>
          <h1>Come to the dark side!</h1>
          <RegisterForm />
        </FormContainer>
      </Container>
    </>
  );
}
