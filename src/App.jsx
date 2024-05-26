import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import "./styles/style.scss";
import { Box } from "@mui/material";
import { testApi } from "./api/test";

function App() {
  useEffect(() => {
    testApi().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Box className="App">
      <AppRouter />
    </Box>
  );
}

export default App;
