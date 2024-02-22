import { WELCOME_PAGE_LINKS } from "@/constants/footerLinks";
import { BASE_ROUTE } from "@/router/routes";

import { Container, Link, LinkItem, LinkList } from "./styled";

const FooterWelcome = () => {
  return (
    <Container>
      <LinkList>
        {WELCOME_PAGE_LINKS.map((linkName) => (
          <LinkItem key={linkName}>
            <Link href={BASE_ROUTE}>{linkName}</Link>
          </LinkItem>
        ))}
      </LinkList>
    </Container>
  );
};

export default FooterWelcome;
