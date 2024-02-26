import { FC } from "react";

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
import { TProps } from "./types";

const TweetComponent: FC<TProps> = ({ id, author, login, text, createdAt, likedById }) => {
  return (
    <Container>
      <Avatar src={avatar} alt="Profile avatar" title="Fyodor" />
      <Content>
        <InfoContainer>
          <Author>{`${id} ${author}`}</Author>
          <Email>{login}</Email>
          <TimeAgo timestamp={createdAt} />
          <Button>
            <img src={moreIcon} alt="Three dots" title="More" />
          </Button>
        </InfoContainer>
        <PostText>{text}</PostText>
        <Button>
          <HeartImg src={heart} alt="Heart" title="Like" />
          <LikesCount>{likedById.length}</LikesCount>
        </Button>
      </Content>
    </Container>
  );
};

export default TweetComponent;
