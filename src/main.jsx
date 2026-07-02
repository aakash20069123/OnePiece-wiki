import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/dashboard.css";
import "./styles/characters.css";
import "./styles/modal.css";
import "./styles/timeline.css";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

ReactDOM.createRoot(
document.getElementById("root")
).render(

<React.StrictMode>
<ErrorBoundary>
<App />
</ErrorBoundary>
</React.StrictMode>

);