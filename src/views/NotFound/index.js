import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import imageError from "../../assets/erropage.png";
import "./index.css";

const NotFound = () => {
  return (
    <Container maxWidth="lg" style={{ paddingTop: 80 }}>
      <div className="center-container">
        <div className="child">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img width={600} src={imageError} alt="image error" />
        </div>
        <div className="child">
          <h1>Ocurrio un error</h1>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <p style={{ width: "600px" }}>
            La página que buscaste ha sido movida, eliminda o tal vez nunca
            existio 🤭, te invito a que vuelvas al home o revises la url.
          </p>
        </div>
        <div className="child">
          <Link to={"/"}>
            <Button color="primary" variant="contained">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
