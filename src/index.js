import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App";
import { Provider } from "react";
import store from "./redux/config/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
