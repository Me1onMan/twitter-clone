import styled from "styled-components";

import graffity from "@/assets/images/twitter-graffity.png";
import FooterWelcome from "@/components/FooterWelcome";
import WelcomeContent from "@/components/WelcomeContent";

const StyledImg = styled.img`
  width: 58%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

const Welcome = () => {
  return (
    <>
      <Main>
        <StyledImg src={graffity} alt="White bird in front of graffity-wall" title="twitter" />
        <WelcomeContent />
      </Main>
      <FooterWelcome />
    </>
  );
};

export default Welcome;
