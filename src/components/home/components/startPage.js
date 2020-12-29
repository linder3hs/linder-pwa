import React from "react";
// Material
import { Container, Grid, Button } from "@material-ui/core";

export default function StartPage() {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "70vh" }}
        className="top__30"
      >
        <Grid item xs={12} sm={6}>
          <h1 className="title">Linder Hassinger</h1>
          <h4 className="subtitle">Lead Software Developer</h4>
          <p className="text__description">
            Hola, soy Software Developer con mucha experiencia trabajando en
            equipo y liderándolos, me gusta mucho aprender y resolver problemas
            de manera analítica.
          </p>
          <Button style={{ padding: 20 }} color="primary" variant="contained">
            Descargar CV
          </Button>
          <p className="text__description top__30">
            También puedes visirar mi{" "}
            <a
              className="btn-link"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="https://www.linkedin.com/in/linderhassinger/"
            >
              Linkedin
            </a>
          </p>
        </Grid>
        <Grid className="hidden" item xs={12} sm={6}>
          <img
            width="400"
            alt="bg__home"
            src="https://blush.design/api/download?shareUri=TP7XYDzUJ&s=0.5%7EFF8282&w=800&h=800&fm=png"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
