import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider.jsx";
const clientID =
  "215489804970-pji8s1i1qv85ieimf8hfcvftuhjcuehq.apps.googleusercontent.com";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        {/* <GoogleOAuthProvider clientId={clientID}> */}
        <App />
        {/* </GoogleOAuthProvider> */}
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
