import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import store from "./store";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
);
