import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scences/global/Topbar";

function App() {
  const [theme, colorMode] = useMode ();
  return (<ColorModeContext.provider value={colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
    <div className="app">
      <main className="context">
        <Topbar />
      </main>
    </div>
    </ThemeProvider>
  </ColorModeContext.provider>
  );
}

export default App;
