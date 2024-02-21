import googleIcon from "@/assets/images/google-icon.png";
import twitterIcon from "@/assets/images/twitter-bird.png";
import Button from "@/UI/Button";

import { ButtonsContainer, Container, Img, Link, StyledH1, StyledH2, Text } from "./styled";

const WelcomeContent = () => {
  return (
    <Container>
      <Img src={twitterIcon} $color="blue" alt="Bird" />
      <StyledH1>Happening now</StyledH1>
      <StyledH2>Join Twitter today</StyledH2>
      <ButtonsContainer>
        <Button variant="outlined">
          <Img src={googleIcon} alt="Colored letter G" />
          Sign up with Google
        </Button>
        <Button variant="outlined">Sign up with email</Button>
      </ButtonsContainer>
      <Text $fontSize="14px">
        By singing up you agree to the <Link href="/">Terms of Service</Link> and{" "}
        <Link href="/">Privacy Policy</Link>, including <Link href="/">Cookie Use</Link>.
      </Text>
      <Text $fontSize="16px">
        Already have an account? <Link href="/">Log in</Link>
      </Text>
    </Container>
  );
};

export default WelcomeContent;
