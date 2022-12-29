import { Box, Button, Grid, Typography } from "@mui/material";

import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  let navigate = useNavigate();

  const handlePathError = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you're looking for doesn't exist.
            </Typography>
            <Button variant="contained" onClick={handlePathError}>
              Back Home
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="Error Page"
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page404;
