import { CssBaseline, ThemeProvider } from "@mui/material";
import createTheme from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import BrowserRouter, { Route, Routes } from "react-router-dom";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={them}>
          <CssBaseline />
          <Routes>
            <Route element={<layout />} />
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            ></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
