import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HMSRoomProvider } from "@100mslive/react-sdk";

import App from "./App";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
  </StrictMode>,
  rootElement
);

