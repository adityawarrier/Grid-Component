import { Box } from "./components/Box/Box";
import { Grid } from "./components/Grid/Grid";
import { GridRuler } from "./components/GridRuler/GridRuler";

const SPACING = "sm" as "sm" | "md" | "lg";

function App() {
  return (
    <div style={{ margin: 16, position: "relative" }}>
      <GridRuler spacing={SPACING} />
      <Grid container spacing={SPACING}>
        <Grid item cols={12}>
          <Box>1</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>2</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
