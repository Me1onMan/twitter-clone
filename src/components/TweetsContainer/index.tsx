import TweetComponent from "../TweetComponent";

import { Container, Header } from "./styled";

const TweetsContainer = () => {
  return (
    <Container>
      <Header>Tweets</Header>
      <TweetComponent />
      <TweetComponent />
      <TweetComponent />
    </Container>
  );
};

export default TweetsContainer;
