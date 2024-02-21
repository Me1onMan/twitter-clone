// import styled from "styled-components";

// import MONTHS from "@/constants/months";
import Welcome from "@/pages/Welcome";
import ThemeProvider from "@/providers/ThemeProvider";
// import Button from "@/UI/Button";
// import Input from "@/UI/Input";
// import Search from "@/UI/Search";
// import Select from "@/UI/Select";
// import ThemeToggler from "@/UI/ThemeToggler";

// const Container = styled.div`
//   width: 750px;
//   margin: 0 auto;

//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

const App = () => {
  return (
    <ThemeProvider>
      {/* <ThemeToggler /> */}
      {/* <Container>
        <Button variant="secondary">Tweet</Button>
        <Input placeholder="Test placeholder" />
        <Search />
        <Select placeholder="Month" options={MONTHS} />
      </Container> */}
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
