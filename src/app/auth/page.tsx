import { Grid } from "@mui/material";

export default function auth() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={5} sx={{ display: "flex", justifyContent: "center" }}>
          <h1>Grid 1</h1>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", justifyContent: "center", bgcolor:"#084837", height:"100%" }}>
          <h1>Grid 2</h1>
        </Grid>
      </Grid>
    </div>
  );
}
