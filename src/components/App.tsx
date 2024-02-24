import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import ThemeProvider from "@/providers/ThemeProvider";

import "../firebase";

import router from "../router";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
