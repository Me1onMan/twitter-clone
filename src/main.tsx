import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

// import App from "./components/App";
// import ErrorBoundary from "./components/ErrorBoundary";
import ThemeProvider from "./providers/ThemeProvider";
import router from "./router";
import store from "./store";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    {/* <ErrorBoundary> */}
    <ThemeProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
    {/* </ErrorBoundary> */}
  </Provider>,
);
