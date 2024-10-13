// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "modern-normalize";
import App from "./components/App/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>
);
