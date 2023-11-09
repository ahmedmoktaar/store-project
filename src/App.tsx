import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import Store from "./redux/Store/index";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <CssBaseline>
        <Provider store={Store}>
          <AppRoutes />
        </Provider>
    </CssBaseline>
  );
}

export default App;
