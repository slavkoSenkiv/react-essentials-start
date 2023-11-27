import ReactDOM from "react-dom/client";
import { EXAMPLES } from "./data.js";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
