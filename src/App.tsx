import { Box } from "./components/Box/Box";
import { Grid } from "./components/Grid/Grid";

function App() {
  return (
    <Grid container>
      <Grid item>
        <Box>1</Box>
      </Grid>
      <Grid item>
        <Box>2</Box>
      </Grid>
      <Grid item>
        <Box>3</Box>
      </Grid>
    </Grid>
  );
}

export default App;
