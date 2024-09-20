import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize the root of the React application and render it into the DOM element with id 'root'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap the App component in React.StrictMode to highlight potential problems */}
    <App />
  </React.StrictMode>
);
