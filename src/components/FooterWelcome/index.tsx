import { WELCOME_PAGE_LINKS } from "@/constants/footerLinks";

import { Container, Link, LinkItem, LinkList } from "./styled";

const FooterWelcome = () => {
  return (
    <Container>
      <LinkList>
        {WELCOME_PAGE_LINKS.map((linkName) => (
          <LinkItem key={linkName}>
            <Link href="/">{linkName}</Link>
          </LinkItem>
        ))}
      </LinkList>
    </Container>
  );
};

export default FooterWelcome;
