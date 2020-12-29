import React from "react";
import { Container, Grid } from "@material-ui/core";

export default function AboutMe() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={12}>
          <h1>Portafolio</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4 className="subtitle">En progreso...</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4 className="subtitle">En progreso...</h4>
        </Grid>
      </Grid>
    </Container>
  );
}
