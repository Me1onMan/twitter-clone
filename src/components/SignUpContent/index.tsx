import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import twitterLogo from "@/assets/images/twitter-bird.png";
import MONTHS from "@/constants/months";
import { WELCOME_ROUTE } from "@/router/routes";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import Select from "@/UI/Select";
import getDaysByMonthYear from "@/utils/getDaysByMonth";
import getYears from "@/utils/getYears";

import { Explanation, H1, H3, Img, InputContainer, Main, SelectDateContainer } from "./styled";

const SignUpContent = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");

  const handleLog = () => {};

  return (
    <Main>
      <Img src={twitterLogo} alt="Bird" title="twitter" />
      <H1>Create an account</H1>
      <InputContainer $gap="26px">
        <Input ref={nameRef} placeholder="Name" />
        <Input ref={phoneRef} placeholder="Phone number" />
        <Input ref={emailRef} placeholder="Email" />
        <Link to={WELCOME_ROUTE}>Use email</Link>
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
          <Select
            selectedValue={year}
            setSelectedValue={setYear}
            placeholder="Year"
            options={getYears()}
          />
          <Select
            selectedValue={month}
            setSelectedValue={setMonth}
            placeholder="Month"
            options={MONTHS}
          />
          <Select
            selectedValue={day}
            setSelectedValue={setDay}
            placeholder="Day"
            options={getDaysByMonthYear(month, +year)}
          />
        </SelectDateContainer>
      </InputContainer>
      <Button onClick={handleLog} variant="primary">
        Next
      </Button>
    </Main>
  );
};

export default SignUpContent;
