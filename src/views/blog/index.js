import React from "react";
import { Container, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{ paddingTop: 40 }}>
      <Grid container spacing={3} className="blog-app">
        <Grid item sm={6} xs={12}>
          <img
            className="img-blog"
            src="https://firebasestorage.googleapis.com/v0/b/recognizedios.appspot.com/o/blog%2Fcoding-man.jpg?alt=media&token=9089a23a-3830-48f2-88bb-f298f63f20f4"
            alt=""
          />
        </Grid>
        <Grid item sm={6} xs={12} style={{ textAlign: "left" }}>
          <span>PRODUCT . Jul 24, 2020</span>
          <br />
          <h2>
            Interview -- Como pasar una entrevista informatica y como pasarla
          </h2>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            animi aspernatur blanditiis dolor dolorem fuga fugiat itaque iure
            laudantium modi natus nesciunt perferendis quae quos sit velit
            veniam vitae voluptate.
          </p>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            animi aspernatur blanditiis dolor dolorem fuga fugiat itaque iure
            laudantium modi natus nesciunt perferendis quae quos sit velit
            veniam vitae voluptate.
          </p>
          <p>
            <Avatar
              alt="Linder Hassinger"
              src="https://avatars0.githubusercontent.com/u/20673011?s=460&u=313cb18dc7dcb95126b81d45315529ebcb257053&v=4"
              className={classes.large}
            />
            <h3 style={{ marginBottom: 2 }}>Linder Hassinger</h3>
            <span className="text-dark">Software Developer</span>
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 60, borderRadius: 8 }}>
        <Grid item sm={6} xs={12} style={{ textAlign: "left" }}>
          <img
            className="img-blog-second"
            src="https://firebasestorage.googleapis.com/v0/b/recognizedios.appspot.com/o/blog%2F19737.jpg?alt=media&token=e1c6d33e-ba33-49a4-856d-aebb03bd5d2d"
            alt=""
          />
          <br />
          <br />
          <span>PRODUCT . Jul 24, 2020</span>
          <br />
          <h2>
            Interview -- Como pasar una entrevista informatica y como pasarla
          </h2>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            animi aspernatur blanditiis dolor dolorem fuga fugiat itaque iure
            laudantium modi natus nesciunt perferendis quae quos sit velit
            veniam vitae voluptate.
          </p>
        </Grid>
        <Grid item sm={6} xs={12} style={{ textAlign: "left" }}>
          <img
            className="img-blog-second"
            src="https://firebasestorage.googleapis.com/v0/b/recognizedios.appspot.com/o/blog%2F18963.jpg?alt=media&token=657052b1-4edf-40ab-a679-457be2fb5f76"
            alt=""
          />
          <br />
          <br />
          <span>PRODUCT . Jul 24, 2020</span>
          <br />
          <h2>
            Interview -- Como pasar una entrevista informatica y como pasarla
          </h2>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            animi aspernatur blanditiis dolor dolorem fuga fugiat itaque iure
            laudantium modi natus nesciunt perferendis quae quos sit velit
            veniam vitae voluptate.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
