import heart from "@/assets/icons/heart.svg";
import moreIcon from "@/assets/icons/more-post.svg";
import avatar from "@/assets/images/avatar_small.png";

import {
  Author,
  Avatar,
  Button,
  Container,
  Content,
  Email,
  HeartImg,
  InfoContainer,
  LikesCount,
  PostText,
} from "./styled";
import TimeAgo from "./TimeAgo";

const TweetComponent = () => {
  return (
    <Container>
      <Avatar src={avatar} alt="Profile avatar" title="Fyodor" />
      <Content>
        <InfoContainer>
          <Author>Fyodor</Author>
          <Email>@fshklyar</Email>
          <TimeAgo timestamp="2020-05-30" />
          <Button>
            <img src={moreIcon} alt="Three dots" title="More" />
          </Button>
        </InfoContainer>
        <PostText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione facilis est
          vitae, animi enim odio officiis, ut aut dolorem nostrum sint? Veniam sapiente esse iure
          enim expedita, sed totam?
        </PostText>
        <Button>
          <HeartImg src={heart} alt="Heart" title="Like" />
          <LikesCount>5</LikesCount>
        </Button>
      </Content>
    </Container>
  );
};

export default TweetComponent;
