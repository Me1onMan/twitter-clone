import { RouterProvider } from "react-router-dom";

import ThemeProvider from "@/providers/ThemeProvider";

import "../firebase";

import router from "../router";

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
