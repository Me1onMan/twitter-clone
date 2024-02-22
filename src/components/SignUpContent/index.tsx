import { useRef } from "react";

import twitterLogo from "@/assets/images/twitter-bird.png";
import MONTHS from "@/constants/months";
import { WELCOME_ROUTE } from "@/router/routes";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import Select from "@/UI/Select";
import getDaysByMonthYear from "@/utils/getDaysByMonth";
import getYears from "@/utils/getYears";

import {
  Explanation,
  H1,
  H3,
  Img,
  InputContainer,
  Link,
  Main,
  SelectDateContainer,
} from "./styled";
// import { TDateOfBirth } from "./types";

// const initialDate: TDateOfBirth = {
//   year: undefined,
//   month: undefined,
//   day: undefined,
// };

const SignUpContent = () => {
  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);

  //   const [dateOfBirth, setDateOfBirth] = useState<TDateOfBirth>(initialDate);

  //   const changeYear = (newYear: number) => {
  //     setDateOfBirth((prevDate) => ({
  //       ...prevDate,
  //       newYear,
  //     }));
  //   };

  return (
    <Main>
      <Img src={twitterLogo} alt="Bird" title="twitter" />
      <H1>Create an account</H1>
      <InputContainer $gap="26px">
        <Input placeholder="Name" />
        <Input placeholder="Phone number" />
        <Input placeholder="Email" />
        <Link href={WELCOME_ROUTE}>Use email</Link>
      </InputContainer>
      <InputContainer $gap="32px">
        <H3>Date of birth</H3>
        <Explanation>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante
          phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium
          id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit.
          Elit congue.
        </Explanation>
        <SelectDateContainer>
          <Select ref={yearRef} placeholder="Year" options={getYears()} />
          <Select ref={monthRef} placeholder="Month" options={MONTHS} />
          <Select
            ref={dayRef}
            placeholder="Day"
            options={getDaysByMonthYear(monthRef.current, yearRef.current)}
          />
        </SelectDateContainer>
      </InputContainer>
      <Button onClick={() => undefined} variant="primary">
        Next
      </Button>
    </Main>
  );
};

export default SignUpContent;
