import ThemeProvider from "@/providers/ThemeProvider";
import ThemeToggler from "@/UI/ThemeToggler";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
};

export default App;
