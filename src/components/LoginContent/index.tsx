import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import twitterIcon from "@/assets/images/twitter-bird.png";
import getUserIdAndLogin from "@/firebase/actions/getUserIdAndLogin";
import { SIGNUP_ROUTE } from "@/router/routes";
import { setUser } from "@/store/slices/userSlice";
import Button from "@/UI/Button";
import Input from "@/UI/Input";

import { Img, InputContainer, Main, StyledH1 } from "./styled";

const LoginContent = () => {
  const dispatch = useDispatch();

  const phoneOrEmailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async () => {
    const phoneOrEmail = phoneOrEmailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const userId = await getUserIdAndLogin(phoneOrEmail, password);
      if (userId) {
        dispatch(setUser({ id: userId }));
      }
    } catch (error) {
      throw new Error(`Error while Login: ${error}`);
    }
  };

  return (
    <Main>
      <Img src={twitterIcon} alt="Bird" title="Twitter" />
      <StyledH1>Log in to Twitter</StyledH1>
      <InputContainer>
        <Input ref={phoneOrEmailRef} placeholder="Phone number, email address" />
        <Input ref={passwordRef} placeholder="Password" type="password" />
        <Button variant="primary" onClick={handleLogin}>
          Log in
        </Button>
      </InputContainer>
      <Link to={SIGNUP_ROUTE}>Sign up to Twitter</Link>
    </Main>
  );
};

export default LoginContent;
