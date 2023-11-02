import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRoot from "./layout/AppRoot";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
