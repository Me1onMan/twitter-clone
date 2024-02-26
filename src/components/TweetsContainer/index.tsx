import TweetComponent from "../TweetComponent";

import { Container, Header } from "./styled";

const tweetsParsedMocked = [
  {
    id: "1",
    author: "Fyodor Shklyar",
    email: "fshklyar@gmail.com",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione facilis est vitae, animi enim odio officiis, ut aut dolorem nostrum sint? Veniam sapiente esse iure enim expedita, sed totam?",
    createdAt: "2024-02-26",
    likedById: ["id1", "id2", "id3"],
  },
  {
    id: "2",
    author: "Fyodor Shklyar",
    email: "fshklyar@gmail.com",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione facilis est vitae, animi enim odio officiis, ut aut dolorem nostrum sint? Veniam sapiente esse iure enim expedita, sed totam?",
    createdAt: "2024-02-25",
    likedById: ["id1", "id2"],
  },
  {
    id: "3",
    author: "Fyodor Shklyar",
    email: "fshklyar@gmail.com",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione facilis est vitae, animi enim odio officiis, ut aut dolorem nostrum sint? Veniam sapiente esse iure enim expedita, sed totam?",
    createdAt: "2024-02-23",
    likedById: ["id1", "id2", "id3", "id4"],
  },
];

const TweetsContainer = () => {
  return (
    <Container>
      <Header>Tweets</Header>
      {tweetsParsedMocked.map(({ id, author, email, text, createdAt, likedById }) => (
        <TweetComponent
          key={id}
          id={id}
          author={author}
          login={`@${email.split("@")[0]}`}
          text={text}
          createdAt={createdAt}
          likedById={likedById}
        />
      ))}
    </Container>
  );
};

export default TweetsContainer;
