import { Link } from "react-router-dom";

import googleIcon from "@/assets/images/google-icon.png";
import twitterIcon from "@/assets/images/twitter-bird.png";
import { BASE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "@/router/routes";
import Button from "@/UI/Button";

import { ButtonsContainer, Container, Img, StyledH1, StyledH2, Text } from "./styled";

const WelcomeContent = () => {
  const goToSignUp = () => {
    window.location.href = SIGNUP_ROUTE;
  };

  return (
    <Container>
      <Img src={twitterIcon} $color="blue" alt="Bird" />
      <StyledH1>Happening now</StyledH1>
      <StyledH2>Join Twitter today</StyledH2>
      <ButtonsContainer>
        <Button onClick={goToSignUp} variant="outlined">
          <Img src={googleIcon} alt="Colored letter G" />
          Sign up with Google
        </Button>
        <Button onClick={goToSignUp} variant="outlined">
          Sign up with email
        </Button>
      </ButtonsContainer>
      <Text $fontSize="14px">
        By singing up you agree to the <Link to={BASE_ROUTE}>Terms of Service</Link> and{" "}
        <Link to={BASE_ROUTE}>Privacy Policy</Link>, including <Link to="/">Cookie Use</Link>.
      </Text>
      <Text $fontSize="16px">
        Already have an account? <Link to={LOGIN_ROUTE}>Log in</Link>
      </Text>
    </Container>
  );
};

export default WelcomeContent;
