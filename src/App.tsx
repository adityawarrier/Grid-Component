import { Box } from "./components/Box/Box";
import { Grid } from "./components/Grid/Grid";
import { GridRuler } from "./components/GridRuler/GridRuler";

const SPACING = "sm" as "sm" | "md" | "lg";

function App() {
  return (
    <div style={{ margin: 16, position: "relative" }}>
      <GridRuler spacing={SPACING} />
      <Grid container spacing={SPACING} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
