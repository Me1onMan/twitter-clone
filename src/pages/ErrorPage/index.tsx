import { useRouteError } from "react-router-dom";

import errorImage from "@/assets/images/Not-found.png";

import { Image, MessageContainer, Wrapper } from "./styled";

type TError = {
  statusText?: string;
  message?: string;
};

const ErrorPage = () => {
  const error: TError = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <Wrapper>
      <MessageContainer>
        <h1>Oops!</h1>
        <h2>Sorry, an unexpected error has occurred.</h2>
        <h2>
          <i>{error.statusText || error.message}</i>
        </h2>
        <Image src={errorImage} alt="Error occured" title="Trying to solve problem" />
      </MessageContainer>
    </Wrapper>
  );
};

export default ErrorPage;
