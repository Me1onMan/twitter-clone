import graffity from "@/assets/images/twitter-graffity.png";
import ErrorBoundary from "@/components/ErrorBoundary";
import FooterWelcome from "@/components/FooterWelcome";
import WelcomeContent from "@/components/WelcomeContent";

import { Main, StyledImg } from "./styled";

const Welcome = () => {
  return (
    <ErrorBoundary>
      <Main>
        <StyledImg src={graffity} alt="White bird in front of graffity-wall" title="twitter" />
        <WelcomeContent />
      </Main>
      <FooterWelcome />
    </ErrorBoundary>
  );
};

export default Welcome;
