import { Box } from "@mui/material";
import { AppRouter } from "./AppRouter";
// We have added style.scss here, therefore all the scss that are import in styles.scss will be imported
// and are available to all the components from here so no need to import any style file in any component 
// below this App Component
import "./style/styles.scss";

/**
 * App.js is entry file for all the components, before it there is index.js where
 * we try to keep little or no logic. Similarly always try to keep top level components
 * as simple as possible. Keep as much as less logic in these components.
 * 
 */

function App() {
  return (
    <Box className="App">
      <AppRouter />
    </Box>
  );
}

export default App;
