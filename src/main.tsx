import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/App";
import { AppContextProvider } from "./hooks/useAppContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
