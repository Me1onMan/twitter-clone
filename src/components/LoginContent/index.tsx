import { useRef } from "react";
import { Link } from "react-router-dom";

import twitterIcon from "@/assets/images/twitter-bird.png";
import { SIGNUP_ROUTE } from "@/router/routes";
import Button from "@/UI/Button";
import Input from "@/UI/Input";

import { Img, InputContainer, Main, StyledH1 } from "./styled";

const LoginContent = () => {
  const phoneOrEmailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <Main>
      <Img src={twitterIcon} alt="Bird" title="Twitter" />
      <StyledH1>Log in to Twitter</StyledH1>
      <InputContainer>
        <Input ref={phoneOrEmailRef} placeholder="Phone number, email address" />
        <Input ref={passwordRef} placeholder="Password" />
        <Button variant="primary" onClick={() => undefined}>
          Log in
        </Button>
      </InputContainer>
      <Link to={SIGNUP_ROUTE}>Sign up to Twitter</Link>
    </Main>
  );
};

export default LoginContent;
